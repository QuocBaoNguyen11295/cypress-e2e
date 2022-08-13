describe('Exchange currency',()=>{
    before('Login to applicaiton',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.get('#user_login').clear().type('username')
        cy.get('#user_password').clear().type('password')
        cy.get('#user_remember_me').check()
        cy.get('input[value="Sign in"]').click()
    })
    it('Open exchange currency tab',()=>{
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('Switzerland (franc)')
        cy.get('#pc_amount').clear().type(1000)
        cy.get('#pc_inDollars_true').check()
        cy.get('#pc_calculate_costs').click()
        cy.get('#pc_conversion_amount').should('be.visible').and('contain','878.50 franc (CHF) = 1000.00 U.S. dollar (USD)')
        cy.get('#purchase_cash').click()
    })

    it('Should show the successful message',()=>{
        cy.get('#alert_content').should('be.visible').and('contain','Foreign currency cash was successfully purchased.')
    })

    after('Clear cookies, local storages',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})