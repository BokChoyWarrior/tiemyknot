// eslint-disable-next-line
/// <reference types="Cypress" />
const url = Cypress.config().baseUrl
describe("Test", () => {
    it('logs in an user', ()=>{
        cy.visit("/");
        cy.findByText(/User Login/).click()
        cy.url().should('eq', `${url}/userLogin`)
        cy.get('input').type('user 1')
        cy.url().should('eq', `${url}/`)
        cy.findByText(/Logged in/).should('exist')
    })
})