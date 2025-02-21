/// <reference types = "cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Dinamic test', () => {

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    foods.forEach(food => {


        it(`Cadastro com comida ${food}`, () => {
            cy.get('#formNome')
                .type('Fauzi')
            cy.get('#formSobrenome')
                .type('Consoli')
            cy.get(`[name=formSexo][value=M]`)
                .click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`)
                .click()
            cy.get('#formEscolaridade')
                .select('Superior')
            cy.get('#formEsportes')
                .select('Corrida')

            cy.get('#formCadastrar')
                .click()
            cy.get('#resultado > :nth-child(1)')
                .should('be.visible')
        })
    })

    it.only('Deve selecionar todos usando o each', () => {
        cy.get('#formNome')
            .type('Fauzi')
        cy.get('#formSobrenome')
            .type('Consoli')
        cy.get(`[name=formSexo][value=M]`)
            .click()
        /* cy.get('[name=formComidaFavorita]')
            .click({multiple: true}) */
        cy.get('[name=formComidaFavorita]')
            .each($el => {
                //$el.click()
                if ($el.val() != 'vegetariano')
                    cy.wrap($el)
                        .click()
            })
        cy.get('#formEscolaridade')
            .select('Superior')
        cy.get('#formEsportes')
            .select('Corrida')

        cy.get('#formCadastrar')
            .click()
        cy.get('#resultado > :nth-child(1)')
            .should('be.visible')
    })

})