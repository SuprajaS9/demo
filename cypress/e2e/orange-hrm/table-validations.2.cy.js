///<reference types="cypress"/>

describe('cypress- table validations',()=>{
    it('table validations',()=>{
        cy.visit('https://en.wikipedia.org/wiki/List_of_current_Indian_chief_ministers')
        //Header Row
        cy.get('table.wikitable > thead > tr').should('have.length', '1')

        //Number of Columns
        /*cy.get('table.wikitable > thead > tr > th').should('have.length', '8').then(($ele)=>{
            cy.log($ele.text())

        })*/

        //Number of Columns
        cy.get('table.wikitable > thead > tr > th').should('have.length', '8').each(($ele,index,$eleList)=>{
            //cy.log($ele.text())
           // cy.log("index column is: "+index+" : "+$ele.text())
           cy.log("index column is: "+index+" : "+$eleList.text())

        })

        
        cy.get('table.wikitable > thead > tr:first-child > th').should('have.length', '8').each(($ele,index,$eleList)=>{
            //cy.log($ele.text())
            cy.log("index column is: "+index+" : "+$ele.text())
          // cy.log("index column is: "+index+" : "+$eleList.text())

        })

        //Identifying Total Rows in a Table
        cy.get('.wikitable >tbody > tr').should('have.length','31')
        //cy.get('.wikitable >tbody > tr > td').next()
        cy.get('.wikitable >tbody > tr > td:first-child >a').eq(12).should('contain.text','Karnataka')  //hard coded
        cy.get('.wikitable >tbody > tr > td:first-child > a').each(($e1, index, $eText)=>{
          //  cy.log($e1.text())
          const getStateName = $e1.text()
          if(getStateName=='Goa'){     //dynamic
            expect(getStateName).to.be.equal('Goa')
            cy.wrap($e1).click()
            //expect(getStateName).to.be.equal('Goa')
           // cy.get('.wikitable >tbody > tr > td').eq(index).next().then(($element1)=>{
           //   cy.log($element1.text())
            }
           // cy.get('.wikitable >tbody > tr > td ')
        })
          
        


    })

    it('view port',()=>{
     cy.viewport(1000,660)
     //cy.viewport(320,660)
    })
})