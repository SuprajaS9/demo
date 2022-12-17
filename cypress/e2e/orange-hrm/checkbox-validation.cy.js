///<reference types="Cypress"/>

describe('Checkbox Validations',{tags : ['smoke']},()=>{

    it('checkbox validation',()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
       // - Testautomation practice page
       // cy.title().should('eq',' - Testautomation practice page'.trim())

        //cy.title().should('include','Testautomation practice page')

        cy.title().should('contain','Testautomation practice page')

        cy.get('.nav-link').should('have.length',6)
        cy.get('.display-3').should('exist')



        cy.get('.display-3').should('have.text','Test automation practice form')

        /*cy.get('.form-check-label [type="checkbox"]').first().check().should('be.checked')

        cy.get('.form-check-label [type="checkbox"]').last().check()

        cy.get('.form-check-label [type="checkbox"]').eq(3).check()*/

        //cy.get('.form-check-label [type="checkbox"]').check({multiple:true})

        //cy.get('.form-check-label [type="checkbox"]').check()


        //first(), eq(), last()

        //cy.get('.form-check-label [type="checkbox"]').should('be.enabled')

       // ScrollTo , ScrollIntoView

      // cy.scrollTo(0,2000)

      /*cy.scrollTo('bottom')
      cy.pause()

      cy.scrollTo('top')*/

      //cy.get('.input-group-text').scrollIntoView()

     // cy.get('.custom-select').select('Spain')

     //cy.get('select').select('Italy')
     //cy.get('select').select(4)

     //cy.get('select').should('have.value','Select option')

     /*cy.get('.nav-link',{timeout:4000}).first().contains('Home')

     cy.get('.nav-link',{delay:2000}).eq(1).contains('Practice')

     cy.get('.nav-link').eq(2).should('contain','Test Automation')

     cy.get('.nav-link').eq(3).should('have.text','Tutorial')

     cy.get('[type="text"]').eq(1).type('Cypress',{delay:2000})*/

     cy.get('[type="text"]').first().type('Cypress',{delay:2000})


     //cy.pause()

     //cy.get('[type="submit"]').first().trigger('click')

     cy.get('[type="submit"]').first().click()






    })
})