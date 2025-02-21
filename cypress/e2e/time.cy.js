/// <reference types = "cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Work with clocks', () => {

    it('Back to the past', () => {
        /*cy.get('#buttonNow')
            .click()
        cy.get('#resultado > span')
            .should('contain', '20/02/2025')

        cy.clock()
        cy.get('#buttonNow')
            .click()
        cy.get('#resultado > span')
            .should('contain', '31/12/1969')*/

        const dt = new Date(1992, 5, 27, 10) //Mês indexado no zero
        cy.clock(dt.getTime())
        cy.get('#buttonNow')
            .click()
        cy.get('#resultado > span')
            .should('contain', '27/06/1992')
    })

    it('Back to the future', () => {
        cy.get('#buttonTimePassed')
            .click()
        cy.get('#resultado > span')
            .should('contain', '17400')
        cy.get('#resultado > span')
            .invoke('text')
            .then(t => {
                const number = parseInt(t)
                cy.wrap(number)
                    .should('gt', 1740069967743)
            })

        cy.clock()
        cy.get('#buttonTimePassed')
            .click()
        cy.get('#resultado > span')
            .invoke('text')
            .then(t => {
                const number = parseInt(t)
                cy.wrap(number)
                    .should('lte', 0)
            })

        /*cy.wait(1000)
        cy.get('#buttonTimePassed')
            .click()
        cy.get('#resultado > span')
            .invoke('text')
            .then(t => {
                const number = parseInt(t)
                cy.wrap(number)
                    .should('lte', 1000)
            })*/

        cy.tick(1000)
        cy.get('#buttonTimePassed')
            .click()
        cy.get('#resultado > span')
            .invoke('text')
            .then(t => {
                const number = parseInt(t)
                cy.wrap(number)
                    .should('lte', 1000)
            })

    })

})