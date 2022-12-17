///<reference types="cypress"/>

describe('cypress- aliases',{tags:"smoke"},()=>{
    it('aliases',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.title().should('contain','Testautomation practice page')
        cy.get('[type="text"]').as('inputBox')
        cy.get('@inputBox').first().type('Cypress').should('have.value','Cypress')
        cy.get('@inputBox').eq(1).type('Test1')
          .should('have.value','Test1')
          .and('have.attr','type')

        cy.get('@inputBox').last().type('Test2')


    })
})