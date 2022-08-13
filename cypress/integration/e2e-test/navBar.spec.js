describe('Navigation bar',()=>{
    before('Open the webpage',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should open online banking tab',()=>{
        cy.get('div > ul#pages-nav >li[id="onlineBankingMenu"]').click()
        cy.url().should('contain','online-banking.html')
        cy.get('h1').should('be.visible')
    })

    it('should open home page tab',()=>{
        cy.get('div > ul#pages-nav >li[id="homeMenu"]').click()
        cy.url().should('contain','index.html')
        cy.get('h4').should('be.visible')
    })

    it('should open feedback tab',()=>{
        cy.get('div > ul#pages-nav >li[id="feedback"]').click()
        cy.url().should('contain','feedback.html')
        cy.get('h3').should('be.visible')
    })

    after('Clear cookies and local storage',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})