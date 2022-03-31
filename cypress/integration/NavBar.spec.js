// eslint-disable-next-line
/// <reference types="Cypress" />
const url = Cypress.config().baseUrl

describe("NavBar component", () => {
    it('redirects the user to the homepage when the logo is clicked', ()=>{
        cy.visit("/123");
        cy.get('[alt="TieMyKnot logo"]').click();
        cy.url().should('eq', `${url}/`);
    });
})