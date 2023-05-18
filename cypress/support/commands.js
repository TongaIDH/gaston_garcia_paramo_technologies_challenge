//Navigation Handling
Cypress.Commands.add("visitDomain", (url) => {
  // Selector for close button on welcome modal
  const welcomeModalCloseButton = "div#welcome_modal button.mfp-close";

  // Visiting the page -- failOnStatusCode: false --> argument passed on the funtction to avoid failing test case execution due to unsuccessful API calls on page load
  cy.visit(url, { failOnStatusCode: false });

  // Asserting that the welcome modal close button is visible and closin the welcome modal
  cy.get(welcomeModalCloseButton, { timeout: 15000 })
    .should("be.visible")
    .click();
});

Cypress.Commands.add("goToUserRegistrationPage", () => {
  // Sign Up page url path
  const signUpPagePath = "/user/registration";
  // Selector for Sign Up page title
  const pageTitle = "h2.page__title";
  // Value for Sign Up page title
  const titleText = "Sign up";

  // Asserting that Sign Up button is visible and clicking it
  cy.contains(titleText).should("be.visible").click();
  // Asserting path included on url
  cy.url().should("include", signUpPagePath);
  // Asserting that the page title is visible and that it has the right text
  cy.get(pageTitle).should("be.visible").and("have.text", titleText);
});

Cypress.Commands.add("goToUserLoginPage", () => {
  // Selector for Login with Mail or Phone option button inside the login nav
  const signInWithMailButton = '[data-test="nav-login-head"]';
  // Sign In page url path
  const signInPagePath = "/user/login";
  // Selector for Sign In page title
  const pageTitle = "h2.page__title";
  // Value for Sign In page title
  const titleText = "Sign in";

  // Asserting that Sign In button is visible and clicking it
  cy.contains(titleText).should("be.visible").click();
  // Asserting that Login with Mail or Phone option button is visible and clicking it
  cy.get(signInWithMailButton).should("be.visible").click();
  // Asserting path included on url
  cy.url().should("include", signInPagePath);
  // Asserting that the page title is visible and that it has the right text
  cy.get(pageTitle).should("be.visible").and("have.text", titleText);
});

Cypress.Commands.add("goToProfilePage", () => {
  // Selector for User nav
  const userMenu = "div.user-avatar__wrapper";
  // Selector for Go To Profile option button inside the user nav
  const goToProfileButton = '[data-test="nav-reg-head"]';
  // Profile page url path
  const profilePagePath = "/cabinet/profile/index";
  // Selector for Profile page title
  const pageTitle = "h1.page__title";
  // Value for Profile page title
  const titleText = "My profile";

  // Asserting that User nav is visible and clicking it
  cy.get(userMenu).should("be.visible").click();
  // Asserting that Go To Profile option button is visible and clicking it
  cy.get(goToProfileButton).should("be.visible").click();
  // Asserting path included on url
  cy.url().should("include", profilePagePath);
  // Asserting that the page title is visible and that it has the right text
  cy.get(pageTitle).should("be.visible").and("have.text", titleText);
});

//Forms Handling
Cypress.Commands.add("register", (email, pass) => {
  // Selector for Username input
  const usernameInput = 'input[data-test="input-email"]';
  // Selector for Terms of Service checkbox
  const tosCheckbox = 'input[data-test="input-terms_and_conditions"]';
  // Selector for Password input
  const passwordInput = 'input[data-test="input-password"]';
  // Selector for Password Confirmation input
  const confirmPasswordInput = 'input[data-test="input-password_confirmation"]';
  // Selector for No Bonus radio button
  const noBonusRadioButton =
    'div#bonus-list > div.special-radio > label[for="bonus-0"]';
  // Selector for Submit Form button
  const submitButton = 'button[data-test="control-submit"]';

  // Asserting that Username input is visible and typing on it
  cy.get(usernameInput).should("be.visible").type(email);
  // Asserting that Terms of Service checkbox is visible and clicking it
  cy.get(tosCheckbox).next().should("be.visible").click();
  // Asserting that Password input is visible and typing on it
  cy.get(passwordInput).should("be.visible").type(pass);
  // Asserting that Password Confirmation input is visible and typing on it
  cy.get(confirmPasswordInput).should("be.visible").type(pass);
  // Asserting that No Bonus radio button is visible and clicking it
  cy.get(noBonusRadioButton).should("be.visible").click();
  // Asserting that Submit Form button is visible and clicking it
  cy.get(submitButton).should("be.visible").click();
});

Cypress.Commands.add("login", (email, pass) => {
  // Selector for Username input
  const usernameInput = '[data-test="input-username"]';
  // Selector for Password input
  const passwordInput = '[data-test="input-password"]';
  // Selector for Submit Form button
  const submitButton = 'button[data-test="control-submit"]';

  // Asserting that Username input is visible and typing on it
  cy.get(usernameInput).should("be.visible").type(email);
  // Asserting that Password input is visible and typing on it
  cy.get(passwordInput).should("be.visible").type(pass);
  // Asserting that Submit Form button is visible and clicking it
  cy.get(submitButton).should("be.visible").click();
});

//Profile Page Actions
Cypress.Commands.add("logout", () => {
  // Selector for Logout button
  const logoutButton =
    '[data-test="form-avatar"] > a.profile__logout > i.icon-logout';
  // Selector for Sign In page title
  const signInPagePath = "/user/login";

  // Asserting that Logout button is visible and clicking it
  cy.get(logoutButton).should("be.visible").click();
  // Asserting path included on url
  cy.url().should("include", signInPagePath);
});

//General Assertions
Cypress.Commands.add("validateSuccessfulRegister", () => {
  // Success Registration page url path
  const successfulRegisterPagePath = "/registrationSuccess";
  // Selector for notification
  const successfulRegisterNotif = "p.notification__description";
  // Value for notification
  const successfulRegisterText =
    " Registration successfully finished! Confirmation has been sent to you. ";

  // Asserting path included on url
  cy.url().should("include", successfulRegisterPagePath);
  // Asserting that the notification is visible and that it has the right text
  cy.get(successfulRegisterNotif)
    .should("be.visible")
    .and("have.text", successfulRegisterText);
});
