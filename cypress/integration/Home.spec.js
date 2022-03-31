// eslint-disable-next-line
/// <reference types="Cypress" />
const url = Cypress.config().baseUrl

describe("Home Page", () => {
    it('redirects the user to the correct pages when buttons are clicked', ()=>{
        cy.visit("/");
        cy.get('button').contains('Create new wedding list').click();
        cy.url().should('eq', `${url}/123`);

        cy.visit("/");
        cy.get('button').contains('Access a wedding list').click();
        cy.url().should('eq', `${url}/access`)
    });

    it('redirectsusers to main page when logo is clicked', ()=>{
        cy.visit("/");
        cy.get('a').first().click();
        cy.url().should('eq', `${url}/`);
    });

})