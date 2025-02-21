/// <reference types = "cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe("Work with alerts", () => {

    it("Alert", () => {
/*        cy.get('#alert')
            .click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg)
                .eq('Alert Simples')
        }) */
       cy.clickAlert('#alert', 'Alert Simples')
    })

    it("Alert com mock", () => {
        const stub = cy.stub().as('Alerta')
        cy.on('window:alert', stub)
        cy.get('#alert')
            .click()
            .then(() => {
                expect(stub.getCall(0))
                    .calledWith('Alert Simples')
            })
    })

    it("Confirm", () => {
        cy.on('window:confirm', msg => {
            expect(msg)
                .eq('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            expect(msg)
                .eq('Confirmado')
        })
        cy.get('#confirm')
            .click()
    })

    it("Deny", () => {
        cy.on('window:confirm', msg => {
            expect(msg)
                .eq('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg => {
            expect(msg)
                .eq('Negado')
        })
        cy.get('#confirm')
            .click()
    })

    it("Prompt", () => {
        cy.window()
            .then(win => {
                cy.stub(win, 'prompt')
                    .returns('27')
            })
        cy.on('window:confirm', msg => {
            expect(msg)
                .eq('Era 27?')
        })
        cy.on('window:alert', msg => {
            expect(msg)
                .eq(':D')
        })
        cy.get('#prompt')
            .click()
    })

    it("Desafio", () => {
        const stub = cy.stub().as('Alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar')
            .click()
            .then(() => expect(stub.getCall(0)).calledWith('Nome eh obrigatorio'))

        cy.get('#formNome')
            .type('Fauzi')
        cy.get('#formCadastrar')
            .click()
            .then(() => expect(stub.getCall(1)).calledWith('Sobrenome eh obrigatorio'))

        cy.get('[data-cy="dataSobrenome"]')
            .type('Consoli')
        cy.get('#formCadastrar')
            .click()
            .then(() => expect(stub.getCall(2)).calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc')
            .check()
        cy.get('#formCadastrar')
            .click()
        cy.get('#resultado > :nth-child(1)')
            .should('be.visible')
    })
})