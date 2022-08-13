import 'cypress-xpath'

describe('Search box test',()=>{
    before('Load webpage',()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('should be able to search with keyword "text" ',()=>{
        cy.xpath('//input[@id="searchTerm"]').clear().type('text {enter}')
    })

    it('should get the message no thing is found',()=>{
        cy.xpath('//div[@class="container"]/div[@class="top_offset"]').should('contain','No results were found for the query: text')
    })

    after('clear local storage and cookes',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})

