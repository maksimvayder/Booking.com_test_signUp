/// <reference types="cypress" />

import RegistrationPage from '../support/pages/registrationPage';
import AuthenticationApi from '../support/pages/AuthenticationApi';
const faker = require('@faker-js/faker').faker;

describe('Booking.com Registration test', () => {
    
    it('should send email and then authenticate using the password with the provided token', () => {
        const randomEmail = faker.internet.email(); 
        const randomPassword = faker.internet.password(); 
        
        console.log('Generated email:', randomEmail);
        console.log('Generated password:', randomPassword);
        AuthenticationApi.sendEmail(randomEmail, { someContextParam: 'value' }).then((response) => {
            expect(response.status).to.eq(200); 
            const opToken = response.body.op_token; 

            AuthenticationApi.authenticateWithPassword(opToken, randomPassword).then((authResponse) => {
                expect(authResponse.status).to.eq(200);
                console.log('Authentication response:', authResponse.body);
            });
        });
    });

    it("should show error message for invalid email format", () => {
        const invalidEmail = "invalid-email-format";
        
        RegistrationPage.visit();
        RegistrationPage.clickSignUpButton();
        RegistrationPage.enterEmail(invalidEmail);
        RegistrationPage.clickContinueButton();
        RegistrationPage.verifyEmailErrorMessage();
    });
});

