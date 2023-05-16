describe("User credentials manipulation", () => {
  beforeEach(() => {
    cy.visit("", {failOnStatusCode: false});
    cy.get('div#welcome_modal button.mfp-close').should('be.visible', ).click() //For closing welcome modal
  });

  it("Should register as new user", () => {
    cy.get('a.button[href="/user/registration"]').should("be.visible").click();
    cy.url().should("include", "/user/registration");
    cy.get('h2.page__title').should('be.visible').and('have.text', 'Sign up');

    cy.fixture('user').then((user) => {
      cy.get('input[data-test="input-email"]').should('be.visible').type('1111116' + user.email)
      cy.get('input[data-test="input-terms_and_conditions"]').next().should('be.visible').click()
      cy.get('input[data-test="input-password"]').should('be.visible').type(user.password);
      cy.get('input[data-test="input-password_confirmation"]').should('be.visible').type(user.password);
      cy.get('div#bonus-list > div.special-radio > label[for="bonus-0"]').should('be.visible').click();
      cy.get('button[data-test="control-submit"]').should('be.visible').click();
    });

    cy.url().should('include', '/registrationSuccess');
    cy.get('p.notification__description').should('be.visible').and('have.text', ' Registration successfully finished! Confirmation has been sent to you. ');
  });
});
