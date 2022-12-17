///<reference types ="Cypress"/>
/* before()
after()
beforeEach()
AfterEach()*/
before(()=>{

    cy.log('Execute in Suite level before all test cases only once')
})

after(()=>{
    cy.log('Execute in Suite level after all test cases only once')
})

beforeEach(()=>{
    cy.log('Execute in Suite level before each test cases')
})

afterEach(()=>{
    cy.log('Execute in Suite level after each test cases')
})

describe('Cypress-Hooks',()=>{
    it('hooks1',()=>{
        cy.log('My First Test Case')

    })

    it('hooks2',()=>{
        cy.log('My Second Test Case')

    })

    it('hooks3',()=>{
        cy.log('My Third Test Case')

    })
})