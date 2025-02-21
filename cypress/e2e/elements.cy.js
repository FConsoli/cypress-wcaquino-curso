/// <reference types = "cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Work with basic elements', () => {
    it('Text', () => {

        /*cy.get('body')
            .should('contain', 'Cuidado')*/
        /*cy.get('span')
            .should('contain'), 'Cuidado')*/
        cy.get('.facilAchar')
            .should('contain', 'Cuidado')
        cy.get('.facilAchar')
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        //cy.get('[href="#"]')
        cy.contains('Voltar')
            .click()

        cy.reload()
        cy.get('#resultado')
            .should('have.text', 'Status: Nao cadastrado')
            .should('have.not.text', 'Voltou!')
        cy.contains('Voltar')
            .click()
        cy.get('#resultado')
            .should('be.visible')
            .should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
        cy.get('#formNome')
            .type('Fauzi Consoli')
            .should('have.value', 'Fauzi Consoli')

        cy.get('#elementosForm\\:sugestoes')
            .type('Teste 123')
            .should('have.value', 'Teste 123')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')
            .should('have.value', '???')

        cy.get('[data-cy="dataSobrenome"]')
            .type('Esperanto{backspace}{backspace}{backspace}{backspace}')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}Acerto', { delay: 100 })
            .should('have.value', 'Acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoMasc')
            .click()
            .should('be.checked')
        cy.get('#formSexoFem')
            .should('not.be.checked')

        cy.get("[name='formSexo']")
            .should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaVegetariana')
            .click()
            .should('be.checked')

        cy.get("[name='formComidaFavorita']")
            .should('have.length', 4)
            .click({ multiple: true })
        cy.get('#formComidaVegetariana')
            .should('not.be.checked')
    })

    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('Superior')
            .should('have.value', 'superior')

        cy.get('[data-test="dataEscolaridade"]')
            .select('mestrado')
            .should('have.value', 'mestrado')

        cy.get('[data-test="dataEscolaridade"] option')
            .should('have.length', 8)
            .then($arr => {
                const values = []
                $arr.each(function () {
                    values.push(this.innerHTML)
                })
                expect(values).include.members(["Superior", "Mestrado"])
            })
    })

    it.only('ComboMultiplo', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['Corrida', 'futebol'])
        cy.get('[data-testid="dataEsportes"]')
            .then($el => {
                expect($el.val()).deep.equal(['futebol', 'Corrida'])
                expect($el.val()).have.length(2)
            })

        cy.get('[data-testid="dataEsportes"]')
            .invoke('val').should('eql', ['futebol', 'Corrida'])
    })

})