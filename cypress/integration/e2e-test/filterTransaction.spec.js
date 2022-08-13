import 'cypress-plugin-tab'
import 'cypress-wait-until'
describe('Filter Transaction',()=>{
    before('Login to applicaiton',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.get('#user_login').clear().type('username')
        cy.get('#user_password').clear().type('password')
        cy.get('#user_remember_me').check()
        cy.get('input[value="Sign in"]').click()
    })
    it('Open Filter Transaction',()=>{
        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()
        cy.get('#aa_description',{timeout:2000}).clear().type('PAYCHECK')
        //cy.wait(2000)
        cy.get('#aa_fromDate',{timeout: 2000}).clear().type('2012-09-01').tab()
        //cy.wait(2000)
        cy.get('#aa_toDate',{timeout:2000}).clear().type('2013-02-02').tab()
        //cy.wait(2000)
        cy.get('#aa_fromAmount',{timeout:2000}).clear().type('100')
        //cy.wait(2000)
        cy.get('#aa_toAmount',{timeout:2000}).clear().type('2000')
        //cy.wait(2000)
        cy.get('#aa_type',{timeout:2000}).select('Withdrawal')
        //cy.wait(3000)
//        cy.pause()
        cy.get('button[type="submit"]',{timeout:2000}).click()
        /*
        cy.waitUntil(cy.window().then(cy.get('#filtered_transactions_for_account').should('be.visible')),{
            timeout: 2000,
            interval: 500
        })
        */
       //cy.wait(2000)
    })

    it('Should show the transaction',()=>{
        cy.get('#filtered_transactions_for_account').should('be.visible')
    })


    after('Clear cookies, local storage',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})