/// <reference types = "cypress" />

describe('Work with iFrame', () => {

    it('Deve preencher o campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1')
            .then(iframe => {
                const body = iframe.contents().find('body')
                cy.wrap(body)
                    .find('#tfield')
                    .type('Funciona?')
                    .should('have.value', 'Funciona?')
            })
    })

    it('Deve testar frame diretamente', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton')
            .click()
    })

})