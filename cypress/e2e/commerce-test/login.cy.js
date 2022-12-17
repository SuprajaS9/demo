///<reference types = "Cypress"/>

describe.skip('Login Test',()=>{
    it('launch application',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('#small-searchterms').should('be.visible').log('URL is launched successfully')
        cy.get('#small-searchterms').type('iPhone')
        cy.get(':nth-child(1) > .category-item > .picture > a > img').click()
        cy.get('.block-manufacturer-navigation > .title > strong').click()
        cy.get(':nth-child(2) > .sub-category-item > .picture > a > img').click()

    })
})

describe('Click on Register link',()=>{
    it('LLaunch url',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('.ico-register').click()
        cy.url().should('include','register')

    })
})