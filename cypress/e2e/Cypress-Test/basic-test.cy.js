///<reference types = "cypress"/>

describe('Basic Test',()=>{
it('Basic Test',()=>{
    cy.log('Cypress Test');
});

it('First Test ',()=>{
    cy.log('First Test')
})

it('Second Test',()=>{
    cy.log('Second Tesst')
})

});

describe('Second Suite',()=>{
    it('PrintStatement',()=>{
        cy.log('Print STatement')
    })
})

describe('Third Suite',()=>{
    it('Third Suite',()=>{
        cy.log('Third Suite')
    })
    
})