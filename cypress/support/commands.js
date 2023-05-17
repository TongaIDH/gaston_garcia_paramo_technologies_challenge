//Navigation Handling
Cypress.Commands.add("visitDomain", (url) => {
  const welcomeModalCloseButton = "div#welcome_modal button.mfp-close";

  cy.visit(url, { failOnStatusCode: false });
  cy.get(welcomeModalCloseButton, { timeout: 15000 })
    .should("be.visible")
    .click(); //For closing welcome modal
});

Cypress.Commands.add("goToUserRegistrationPage", () => {
  const signUpPagePath = "/user/registration";
  const pageTitle = "h2.page__title";
  const titleText = "Sign up";

  cy.contains(titleText).should("be.visible").click();
  cy.url().should("include", signUpPagePath);
  cy.get(pageTitle).should("be.visible").and("have.text", titleText);
});

Cypress.Commands.add("goToUserLoginPage", () => {
  const signInWithMailButton = '[data-test="nav-login-head"]';
  const signInPagePath = "/user/login";
  const pageTitle = "h2.page__title";
  const titleText = "Sign in";

  cy.contains(titleText).should("be.visible").click();
  cy.get(signInWithMailButton).should("be.visible").click();
  cy.url().should("include", signInPagePath);
  cy.get(pageTitle).should("be.visible").and("have.text", titleText);
});

Cypress.Commands.add("goToProfilePage", () => {
  const userMenu = "div.user-avatar__wrapper";
  const goToProfileButton = '[data-test="nav-reg-head"]';
  const profilePagePath = "/cabinet/profile/index";
  const pageTitle = "h1.page__title";
  const titleText = "My profile";

  cy.get(userMenu).should("be.visible").click();
  cy.get(goToProfileButton).should("be.visible").click();
  cy.url().should("include", profilePagePath);
  cy.get(pageTitle).should("be.visible").and("have.text", titleText);
});

//Forms Handling
Cypress.Commands.add("register", (email, pass) => {
  const usernameInput = 'input[data-test="input-email"]';
  const tosCheckbox = 'input[data-test="input-terms_and_conditions"]';
  const passwordInput = 'input[data-test="input-password"]';
  const confirmPasswordInput = 'input[data-test="input-password_confirmation"]';
  const noBonusRadioButton =
    'div#bonus-list > div.special-radio > label[for="bonus-0"]';
  const submitButton = 'button[data-test="control-submit"]';

  cy.get(usernameInput).should("be.visible").type(email);
  cy.get(tosCheckbox).next().should("be.visible").click();
  cy.get(passwordInput).should("be.visible").type(pass);
  cy.get(confirmPasswordInput).should("be.visible").type(pass);
  cy.get(noBonusRadioButton).should("be.visible").click();
  cy.get(submitButton).should("be.visible").click();
});

Cypress.Commands.add("login", (email, pass) => {
  const usernameInput = '[data-test="input-username"]';
  const passwordInput = '[data-test="input-password"]';
  const submitButton = 'button[data-test="control-submit"]';

  cy.get(usernameInput).should("be.visible").type(email);
  cy.get(passwordInput).should("be.visible").type(pass);
  cy.get(submitButton).should("be.visible").click();
});

//Profile Page Actions
Cypress.Commands.add("logout", () => {
  const logoutButton =
    '[data-test="form-avatar"] > a.profile__logout > i.icon-logout';
  const signInPagePath = "/user/login";

  cy.get(logoutButton).should("be.visible").click();
  cy.url().should("include", signInPagePath);
});

//General Assertions
Cypress.Commands.add("validateSuccessfulRegister", () => {
  const successfulRegisterPagePath = "/registrationSuccess";
  const successfulRegisterNotif = "p.notification__description";
  const successfulRegisterText =
    " Registration successfully finished! Confirmation has been sent to you. ";

  cy.url().should("include", successfulRegisterPagePath);
  cy.get(successfulRegisterNotif)
    .should("be.visible")
    .and("have.text", successfulRegisterText);
});
