///<reference types="cypress"/>

describe('cypress- handling hidden elements',{tags:"smoke"},()=>{
    it('hidden- elements',()=>{
        cy.visit('https://www.amazon.in/')
      //  cy.get('div#nav-xshop a:visible').should('have.length', 5)
       /* cy.get('div#nav-xshop a').then(($getAllElementsText)=>{
            cy.log($getAllElementsText.text())
        })*/

        cy.get('div#nav-xshop a').each(($e1, index, $eleText)=>{
            cy.log($e1.text())
        })

    })

    it.only('css- selectors',()=>{
        cy.visit('https://www.amazon.in/')
        //cy.get('#nav-tools a:first-child').trigger('mouseover')
        cy.get('#nav-tools a:last-child').should('have.attr','href')
        //cy.get('#nav-tools a:nth-child(2)').trigger('mouseover')
        
        //cy.get('#nav-tools a:nth-last-child(1)').should('have.attr','href')
        //cy.get('#nav-tools a:nth-last-child(3)').trigger('mouseover')
        cy.get('#nav-tools a').eq(1).trigger('mouseover')

    })
})