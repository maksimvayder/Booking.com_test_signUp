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
      cy.get('.nw-signin [type="submit"]').click();
  }

  verifyEmailErrorMessage() {
    cy.get('#username-note').should("be.visible");
  }
}

export default new RegistrationPage();
