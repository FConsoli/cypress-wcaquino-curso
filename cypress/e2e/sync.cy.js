/// <reference types = "cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Esperas...', () => {

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            .should('not.exist')

        cy.get('#novoCampo')
            .should('exist')
            .type('Funciona')
    })

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay')
            .click()

        cy.get('#novoCampo')
            //.should('not.exist')
            .should('exist')
            .type('Funciona')
    })

    it('Uso do find', () => {
        cy.get('#buttonList')
            .click()

        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
            //.find('span')
            .should('contain', 'Item 2')
    })

    it('Uso do timeout', () => {
        cy.get('#buttonDelay')
            .click()
        //cy.get('#novoCampo', {timeout: 1000})
        cy.get('#novoCampo')
            .should('exist')

        cy.get('#buttonListDOM')
            .click()
        cy.wait(5000)
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    it('Should vs Then', () => {
        cy.get('#buttonListDOM')
            .click()
        cy.get('#lista li span')
            .then($el => {
                console.log($el)
                expect($el).length(1)
            })
    })
})