describe("User credentials manipulation", () => {
  const magicNumber = Math.floor(Math.random() * 10000);

  beforeEach(() => {
    cy.visitDomain("");
  });

  it("Should register as new user", () => {
    //Navigating to Sign Up page
    cy.goToUserRegistrationPage();

    //Filling sign up form
    cy.fixture("user").then((user) => {
      cy.register(magicNumber + user.email, user.password);
    });

    //Asserting successful sign up
    cy.validateSuccessfulRegister();
  });

  it("Should login with previously created user and go to profile page, then logout", () => {
    //Navigating to Login page
    cy.goToUserLoginPage();

    //Filling login form
    cy.fixture("user").then((user) => {
      cy.login(magicNumber + user.email, user.password);
    });

    //Navigating to Profile page
    cy.goToProfilePage();

    //Logout
    cy.logout();
  });
});
