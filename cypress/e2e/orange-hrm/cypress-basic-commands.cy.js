///<reference types="Cypress"/>

describe('Cypress Basic Commands',()=>{

    it('Basic Commands',()=>{


        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('Admin')
        //cy.get('input[name="username"]').clear()
        cy.get('input[name="username"]').should('be.visible')
       // cy.pause()
        cy.get('input[name="username"]').should('have.value','Admin')
        //cy.wait(2000)
        cy.get('input[type="password"]').type('admin123')

        
        
        cy.get('.oxd-input--active').should('have.attr','class')

        cy.get('input[type="password"]').should('have.attr','type')


       // cy.get("button[class*='oxd-button']").click()
       // cy.get("button[class^='oxd-button']").click()
       // cy.get(".oxd-button").click()

        cy.get("[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()

        

    })


    it('Verify User Login is successful',()=>{

        cy.get('.oxd-topbar-header-breadcrumb').should('be.visible')
    })

})