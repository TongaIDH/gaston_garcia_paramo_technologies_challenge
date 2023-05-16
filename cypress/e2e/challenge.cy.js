describe("User credentials manipulation", () => {
  const magicNumber = Math.floor(Math.random() * 10000);

  beforeEach(() => {
    cy.visit("", { failOnStatusCode: false });
    cy.get("div#welcome_modal button.mfp-close", { timeout: 15000 })
      .should("be.visible")
      .click(); //For closing welcome modal
  });

  it("Should register as new user", () => {
    //Navigating to Sign Up page
    cy.get('a.button[href="/user/registration"]').should("be.visible").click();
    cy.url().should("include", "/user/registration");
    cy.get("h2.page__title").should("be.visible").and("have.text", "Sign up");

    //Filling sign up form
    cy.fixture("user").then((user) => {
      cy.get('input[data-test="input-email"]')
        .should("be.visible")
        .type(magicNumber + user.email);
      cy.get('input[data-test="input-terms_and_conditions"]')
        .next()
        .should("be.visible")
        .click();
      cy.get('input[data-test="input-password"]')
        .should("be.visible")
        .type(user.password);
      cy.get('input[data-test="input-password_confirmation"]')
        .should("be.visible")
        .type(user.password);
      cy.get('div#bonus-list > div.special-radio > label[for="bonus-0"]')
        .should("be.visible")
        .click();
      cy.get('button[data-test="control-submit"]').should("be.visible").click();
    });

    //Asserting successful sign up
    cy.url().should("include", "/registrationSuccess");
    cy.get("p.notification__description")
      .should("be.visible")
      .and(
        "have.text",
        " Registration successfully finished! Confirmation has been sent to you. "
      );
  });
  it("Should login with previously created user and go to profile page, then logout", () => {
    //Navigating to Login page
    cy.contains('Sign in').should('be.visible').click();
    cy.get('[data-test="nav-login-head"]').should('be.visible').click();

    //Filling login form
    cy.fixture("user").then((user) => {
      cy.get('[data-test="input-username"]')
        .should("be.visible")
        .type(magicNumber + user.email);
      cy.get('[data-test="input-password"]')
        .should("be.visible")
        .type(user.password);
      cy.get('button[data-test="control-submit"]').should("be.visible").click();
    });

    //Navigating to Profile page
    cy.get('div.user-avatar__wrapper').should('be.visible').click();
    cy.get('[data-test="nav-reg-head"]').should('be.visible').click();
    cy.url().should('include', '/cabinet/profile/index')
    cy.get('h1.page__title').should('be.visible').and('have.text', 'My profile');

    //Logout
    cy.get('[data-test="form-avatar"] > a.profile__logout > i.icon-logout').should('be.visible').click()
    cy.url().should('include', '/user/login')
  });
});
