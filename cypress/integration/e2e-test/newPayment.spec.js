import 'cypress-plugin-tab'
describe('Add new payment',()=>{
    before('Login to applicaiton',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.get('#user_login').clear().type('username')
        cy.get('#user_password').clear().type('password')
        cy.get('#user_remember_me').check()
        cy.get('input[value="Sign in"]').click()
    })
    
    it('should fill out information for Payment',()=>{
        cy.get('#pay_bills_tab').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('Bank of America')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type(2000)
        cy.get('#sp_date').type('2022-08-24').tab()
        cy.get('#sp_description').type('Test')
        cy.get('#pay_saved_payees').click()
    })

    it('create payment successfully',()=>{
        cy.get('#alert_content > span').should('be.visible').and('contain','The payment was successfully submitted.')
    })

    after('clear cookies, local storages',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})