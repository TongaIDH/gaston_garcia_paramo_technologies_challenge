//Navigation Handling
Cypress.Commands.add("visitDomain", (url) => {
  cy.visit(url, { failOnStatusCode: false });
  cy.get("div#welcome_modal button.mfp-close", { timeout: 15000 })
    .should("be.visible")
    .click(); //For closing welcome modal
});

Cypress.Commands.add("goToUserRegistrationPage", () => {
  cy.get('a.button[href="/user/registration"]').should("be.visible").click();
  cy.url().should("include", "/user/registration");
  cy.get("h2.page__title").should("be.visible").and("have.text", "Sign up");
});

Cypress.Commands.add("goToUserLoginPage", () => {
  cy.contains("Sign in").should("be.visible").click();
  cy.get('[data-test="nav-login-head"]').should("be.visible").click();
});

Cypress.Commands.add("goToProfilePage", () => {
  cy.get("div.user-avatar__wrapper").should("be.visible").click();
  cy.get('[data-test="nav-reg-head"]').should("be.visible").click();
  cy.url().should("include", "/cabinet/profile/index");
  cy.get("h1.page__title").should("be.visible").and("have.text", "My profile");
});

//Forms Handling
Cypress.Commands.add("register", (email, pass) => {
  cy.get('input[data-test="input-email"]').should("be.visible").type(email);
  cy.get('input[data-test="input-terms_and_conditions"]')
    .next()
    .should("be.visible")
    .click();
  cy.get('input[data-test="input-password"]').should("be.visible").type(pass);
  cy.get('input[data-test="input-password_confirmation"]')
    .should("be.visible")
    .type(pass);
  cy.get('div#bonus-list > div.special-radio > label[for="bonus-0"]')
    .should("be.visible")
    .click();
  cy.get('button[data-test="control-submit"]').should("be.visible").click();
});

Cypress.Commands.add("login", (email, pass) => {
  cy.get('[data-test="input-username"]').should("be.visible").type(email);
  cy.get('[data-test="input-password"]').should("be.visible").type(pass);
  cy.get('button[data-test="control-submit"]').should("be.visible").click();
});

//Profile Page Actions1
Cypress.Commands.add("logout", () => {
  cy.get('[data-test="form-avatar"] > a.profile__logout > i.icon-logout')
    .should("be.visible")
    .click();
  cy.url().should("include", "/user/login");
});

//General Assertions
Cypress.Commands.add("validateSuccessfulRegister", () => {
  cy.url().should("include", "/registrationSuccess");
  cy.get("p.notification__description")
    .should("be.visible")
    .and(
      "have.text",
      " Registration successfully finished! Confirmation has been sent to you. "
    );
});

Cypress.Commands.add("validateSuccessfulLogin", () => {});
