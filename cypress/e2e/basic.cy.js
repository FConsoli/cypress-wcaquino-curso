/// <reference types = "cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.title()
            .should('eq', 'Campo de Treinamento')
        //.and('contain', 'Treinamento').debug()

        let syncTitle

        cy.title()
            .then(title => {
                console.log(title)

                cy.get('#formNome')
                    .type(title)

                syncTitle = title
            })

        cy.get('[data-cy=dataSobrenome]')
            .then($el => {
                $el.val(syncTitle)
            })

        cy.get('#elementosForm\\:sugestoes')
            .then($el => {
                cy.wrap($el)
                    .type(syncTitle)
            })
    })

    it('Should find and interact with an element', () => {
        cy.pause()

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})