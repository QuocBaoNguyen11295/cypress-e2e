describe('Transfer Funds',()=>{
    before('Open the webpage',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.get('#user_login').clear().type('username')
        cy.get('#user_password').clear().type('password')
        cy.get('#user_remember_me').check()
        cy.get('input[value="Sign in"]').click()
    })

    it('Should fill out information to Transfer Funds',()=>{
        cy.contains('Transfer Funds').click()
        cy.get('#tf_fromAccountId').should('be.visible').select('Credit Card(Avail. balance = $ -265)')
        cy.get('#tf_toAccountId').should('be.visible').select('Checking(Avail. balance = $ -500.2)')
        cy.get('#tf_amount').clear().type(12000)
        cy.get('#tf_description').clear().type('Test Test')
        cy.get('#btn_submit').click()
        cy.get('#tf_fromAccountId').should('be.disabled').and('have.value','Credit Card')
        cy.get('#tf_toAccountId').should('be.disabled').and('have.value','Checking')
        cy.get('#tf_amount').should('be.disabled').and('have.value',12000)
        cy.get('#tf_description').should('be.disabled').and('have.value','Test Test')
        cy.get('#btn_submit').click()
    })

    it('Should show the successful message',()=>{
        cy.get('div.alert-success').should('be.visible').and('contain','You successfully submitted your transaction.')
    })

    after('Clear cookies, local storages',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})