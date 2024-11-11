class RegistrationPage {
  visit() {
      cy.visit("https://www.booking.com/");
      cy.get("#onetrust-accept-btn-handler").click();
  }

  clickSignUpButton() {
      cy.get('[data-testid="header-sign-up-button"]').click();
  }

  enterEmail(email) {
      cy.get("#username").type(email);
  }

  clickContinueButton() {
      cy.contains("Continue with email").click();
  }

  verifyEmailErrorMessage() {
      cy.contains("Make sure the email address you entered is correct.").should("be.visible");
  }
}

export default new RegistrationPage();
