///<reference types ="cypress"/>

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
        //const getText= cy.get('[type="submit"]').last().text()
       // cy.get('[type="submit"]').last().then(($buttontext)=>{
            //cy.log($buttontext.text())
           /* const btntext= $buttontext.text()
            expect(btntext).contain('Submit')

            expect(btntext).to.be.equal('Submit')*/
       // })
       cy.visit('https://itera-qa.azurewebsites.net/home/automation')
       /*const txtvar= cy.get('[type="submit"]').last().text()
       cy.log(txtvar)*/
        
       cy.get('[type="submit"]').last().then(($txtvl)=>{
        cy.log($txtvl.text())
        console.log('Cypress')
        const txtvar= $txtvl.text()
        cy.get('[type="text"]').first().type(txtvar)
       })
    })

    it('Click on Navigation Bar',{tags : ['firefox']}, ()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
       // cy.get('.nav-link').eq(1).click()
       cy.get('.nav-link').each(($item,indexes,$loop)=>{
       // cy.log("Home Navigation Items-"+ index + " : "+ $i.text() )

       // cy.log("Home Navigation Items-"+ index + " : "+ $i.length() )

       /*if($item.text()=='Sign Up') {
        cy.wrap($item).click()
       } */
       cy.log(indexes)
       if(indexes==2) {
        cy.wrap($item).click()
       }
       })

    })

})