describe('Feedback form',()=>{
    var name="";
    before('Open feedback form',()=>{
        cy.visit('http://zero.webappsecurity.com/feedback.html')
    })

    it('should fill out information for feedback',()=>{
        cy.get('input[name="name"]').clear().type('Quoc Bao Nguyen')
        name = cy.get('input[name="name"]').invoke('attr','text')
        cy.get('input[name="email"]').clear().type('nqb@gmail.com')
        cy.get('input[name="subject"]').clear().type('Test Test')
        cy.get('textarea[name="comment"]').clear().type('Test Test Test')
        cy.get('input[name="submit"]').click()
    })

    it('should be get correct the message',()=>{
        cy.get('div.top_offset > div.row > div.offset3').should('contain.text','Thank you for your comments, '+name+'. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
    })

    after('Clear all cookies and local storage',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})