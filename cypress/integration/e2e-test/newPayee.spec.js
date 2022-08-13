import 'cypress-xpath'
describe('Create a new payee',()=>{
    var name = "Quoc Bao Nguyen";
    before('Open the webpage',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.get('#user_login').clear().type('username')
        cy.get('#user_password').clear().type('password')
        cy.get('#user_remember_me').check()
        cy.get('input[value="Sign in"]').click()
    })
    it('Fill out some information to Add New Payee page',()=>{
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').clear().type(name)
        cy.get('#np_new_payee_address').clear().type('Text Text')
        cy.get('#np_new_payee_account').clear().type('332211')
        cy.get('#np_new_payee_details').clear().type('321321321')
        cy.get('#add_new_payee').click()
    })

    it('show the successful message',()=>{
        cy.get('#alert_content')
        .should('be.visible')
        .and('contain','The new payee '+name+' was successfully created.')
    })

    after('Clear cookies, local storage',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})