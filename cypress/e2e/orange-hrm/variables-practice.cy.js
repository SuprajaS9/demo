///<reference types = "Cypress"/>

describe('Variables Practice',()=>{
    it('Itera Top Bar',()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.get('.nav-item').then(($vals)=>{
            const valuestext= $vals.text()
            cy.log(valuestext)
        })
    })

    it('Form Group',()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.form-group').then(($formgrp)=>{
            const formgroup= $formgrp.text()
            cy.log(formgroup).eq(2).title()
        })
    })

    it('Checkbox Section',{tags : ['firefox']}, ()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.card-body').then(($chkbox)=>{
           const lgth= $chkbox.text()

           cy.log(lgth)

           //get length
           const leng= $chkbox.length()
           cy.log(leng.length())
        })

    })
})