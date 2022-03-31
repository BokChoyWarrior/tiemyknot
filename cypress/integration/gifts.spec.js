// eslint-disable-next-line
/// <reference types="Cypress" />
const url = Cypress.config().baseUrl

describe("Gifts Page", () => {
    it('redirects the user to the gift page provided the id and pass are correct', ()=>{
        cy.visit("/");
        cy.get('button').contains('Access a wedding list').click();
        cy.url().should('eq', `${url}/access`);

      
        cy.get('input[type="text"]').type('1');
        cy.get('input[type="password"]').type('1234');
        cy.url().should('eq', `${url}/gifts`)
        cy.findByText(/Viewing list/). should('be.visible')
        cy.get('a').contains('Exit Wedding List').click();
        cy.get('button').contains('Access a wedding list').click();
        cy.get('input[type="text"]').type('1111');
        cy.get('input[type="password"]').type('12341111');
        cy.url().should('eq', `${url}/access`)
    });

})