import 'cypress-xpath'
let rowsLength
describe('Login to application',()=>{
    before('Open the webpage',()=>{
        cy.task('readXlsx',{
            file: 'cypress/fixtures/excelData.xlsx', sheet: 'Sheet1'
        }).then((rows)=>{
            rowsLength = rows.length
            cy.writeFile('cypress/fixtures/xlsxData.json',{rows})
        })
        cy.visit('http://zero.webappsecurity.com/login.html')
    })
    it('should login unsuccessfully',()=>{
        cy.fixture('xlsxData').then((data) => {
            for(var i = 0;i < rowsLength;i++){
                cy.get('input[id="user_login"]').type(data.rows[i].username + '{backspace}')
                cy.get('input[id="user_password"]').type(data.rows[i].password + '{backspace}')
                cy.get('input[name="submit"]').click()
                cy.wait(3000)
                cy.get('div.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')
            }

        })
    })

    it('should login successfully',()=>{
        cy.get('input[id="user_login"]').type('username')
        cy.get('input[id="user_password"]').type('password')
        cy.get('input[name="submit"]').click()
        cy.wait(3000)
        cy.xpath('//div[@id="settingsBox"]/ul/li[3]').contains('username')
    })

    it('should logout after clicking on logout button',()=>{
        cy.get('i.icon-user').click()
        cy.wait(3000)
        cy.get('a#logout_link').click()
        cy.wait(3000)
        cy.get('#signin_button').should('be.visible')
    })
    after('Clear local storage and cookies',()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
    })
})