import 'cypress-xpath'
describe('Send forgotten password',()=>{
    before('Load webpage',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should click on Sign in button',()=>{
        cy.get('#signin_button').click()
    })

    it('should click on forgotten password link',()=>{
        cy.xpath('//a[normalize-space()="Forgot your password ?"]').click()
    })

    it('should type the email',()=>{
        cy.get('#user_email').clear().type('ttxxx@gmail.com')
    })

    it('should click on Send button',()=>{
        cy.get('input[value="Send Password"]').click()
    })

    it('should check the result after clicking on Send button',()=>{
        cy.get('div.container > div.top_offset').should('contain','Your password will be sent to the following email: ttxxx@gmail.com')
    })
})