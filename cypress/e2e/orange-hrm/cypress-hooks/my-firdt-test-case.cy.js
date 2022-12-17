///<reference types="cypress"/>

beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com')
})
describe('Hooks',()=>{
    it('first test case',()=>{
       // cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.url().should('include','login').log('User is in Login screen')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
    })

    it('Check Forgot Password link',()=>{
       // cy.visit('https://opensource-demo.orangehrmlive.com')
        cy.url().should('include','login').log('User is in Login screen')
        cy.get('.orangehrm-login-forgot-header').click()
        cy.url().should('include','requestPasswordResetCode')
        //cy.url().contains('requestPasswordResetCode')
    })
})