/// <reference types = "cypress" />

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
})

describe('Locators', () => {
//Olhar arquivo e2e na pasta support para prioridades de selector
    it('using jQuery selector', () => {
        //4 formas para se buscar o mesmo elemento
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody>tr:eq(0) td:nth-child(3)>input')
        cy.get("[onclick*='Francisco']") //or
        cy.get('[onclick*=\'Francisco\']') //caracter de escape

        cy.get('table#tabelaUsuarios td:contains(\'Doutorado\'):eq(0)~td:eq(3) > input')
        cy.get('table#tabelaUsuarios tbody>tr:eq(2)>td:eq(5) input')
    })

    it('using xpath', () => {
        cy.xpath('//input[contains(@onclick, \'Maria\')]')
        cy.xpath("//table[@id='tabelaUsuarios']//td[contains(., 'Maria')]/..//input[@type='text']")
        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']")
            .type('Funcionou')
    })
})