///<reference types = "Cypress"/>

describe('Itera Automation Website',()=>{
    it('Cypress Practice',()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.get('[type="text"]').eq(1).type('Supraja')

        cy.get('#phone').should('be.visible').type(9001)

        //cy.get('[aria-describedby="emailHelp"]').should('be.above','Password').type('new@email.com')

        cy.get('[aria-describedby="emailHelp"]').should('be.empty').type('new@email.com')

        cy.get('input[placeholder="Password"]').should('be.enabled').type('pass')


        cy.get('textarea[id="address"]').type('Chennai').should('have.id','address')

        cy.get('.btn-primary').click()

        //Radio Btn
        cy.get('#female').click()

        cy.get('.form-check-input').eq(2).should('not.be.enabled')

        //checkbox
        
        cy.get('.form-check-input').eq(4).check()
        cy.get('.form-check-input').eq(9).check()

        //Drop Down

        cy.get('.custom-select').select('Malta')
        
        //Radio button

        cy.get('[for="2years"]').should('be.visible').click()


        cy.get('.custom-control-label').eq(4).should('not.be.enabled')



        //CB

        cy.get('label[for="selenium"]').click()
        cy.get('label[for="testng"]').click()
        
       // cy.get('label[for="customCheck7"]').should('not.be.visible') 
       
       //cy.get('[type="checkbox"]').should('be.disabled')

       //cy.get('[type="checkbox"]').should('not.be.enabled')

       cy.get('.custom-control-input').last().should('be.disabled')

      // cy.get('.custom-control-input').contains('None').should('be.disabled')




    })

    it('Check Box', {tags:['smoke']}, ()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.get('#wednesday').click()
    })
})

