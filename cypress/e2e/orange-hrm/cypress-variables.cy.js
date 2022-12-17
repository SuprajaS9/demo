///<reference types ="Cypress"/>

describe('Cypress Variables',()=>{
    it('Variables',()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

      //  cy.title().should('contain',' - Testautomation practice page','trim()')
        //cy.wait(5000)

        cy.title().should('eq', ' - Testautomation practice page '.trim()).then(($param)=>{
            console.log("Hello")  //asynchronous
        })

        
    })

    it('Button Text Validation',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        //const getText= cy.get('[type="submit"]').last().text()
        cy.get('[type="submit"]').last().then(($buttontext)=>{
            //cy.log($buttontext.text())
            const btntext= $buttontext.text()
            expect(btntext).contain('Submit')

            expect(btntext).to.be.equal('Submit')
        })
    })

    it('Text validation 2',{tags : ['smoke']},()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.nav-link').should('contain','Home')
        cy.get('.nav-link').should('have.length',6)
        cy.get('.nav-link').each(($a,index, $text)=>{
            cy.log($a.text())
        })
    })

    it('Text validation 3',()=>{
        cy.get('.nav-link').should('contain','Home')
        cy.get('.nav-link').should('have.length',6)
        cy.get('.nav-link').then(($a)=>{
            cy.log($a.text())
        })
    })

   
}
)