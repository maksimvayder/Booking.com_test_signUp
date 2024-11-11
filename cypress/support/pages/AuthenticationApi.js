class AuthenticationApi {
    sendEmail(email, context) {
        return cy.request({
            method: 'POST',
            url: 'https://account.booking.com/api/identity/authenticate/v1.0/enter/email/submit',
            body: {
                email: email,
                context: context,
                registrationFlow: 'standard',
                npcFlow: false
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            failOnStatusCode: false
        });
    }

    authenticateWithPassword(password) {
        const opToken = 'EgVvYXV0aCKqBQoUdk8xS2Jsazd4WDl0VW4yY3BaTFMSCWF1dGhvcml6ZRo1aHR0cHM6Ly9zZWN1cmUuYm9va2luZy5jb20vbG9naW4uaHRtbD9vcD1vYXV0aF9yZXR1cm4qyQRVcGNEM21acFFVNkFYNHdlVEk2Q3VJelgwbS1sLU1lTTRGaHllLTlyanVBQ3FvZ2FHLXA3Z1pRS1BuNEs0SVVjeXl3Snkzd1NSejMwbTMwVU5XVkxrVHRvSjNxUGI1cTh4YnlIX3hmZVRxSThhOXpDRGd1cFRFNFFCUDlPdDQzUTItT3JmQWI2eFJuUWpSYW5XNGNDektrZDJhTmhRcVRwQm94dGFEbmUzOTVGQUF4TU54U1FKUEtCcUJkSkRKS2l5QVZzVEtqclRsYjdzWVZGa2JXTEhodEtkaUt4eWxSeUR4aFZNVEstMGlzamVrWkh2ZjQ0bm9PRDl4MnNtMDllLWsyOVAtU091SUpTYm9HV0Y3SVNTQWNrWkV4Q25TaGpFb0VNaWMwTnM5TjRteWlCX3FNWHM2U1JpTm9aSzZ5QzdzTUNoM2NDMEJiYnFaOFVvaUtYVkNEUW8wdkJidmxOWFh0aEYtNW53S1IyZjRWNW1ZS2VKNkVBbXFCeEg4NUFyTVpGb1pya0VNRjAtZlN4eXYxQXg2WEVRUWgwaDNXaFdhS1Rmem9mS2xIT0NpUjJvRjJ4alJwMTVEVUFlV2NoRjhPMXozYUtUUDZlZ1J1a1BuSElQQ3JPNWRuT25SdElRUW5YeXBTM3FSNllaTG43YUxpRzdUYUY5SUhlOWhhRnZoR1JqMlhPSEhQcG9kQTB3M25wODY2STkwcGhIaVRYS2lJPSpleUpwWkNJNkluUnlZWFpsYkd4bGNsOW9aV0ZrWlhJaWZRPT1CBGNvZGUqMgiOyBIw1Oyij5WvJzoAQgBYyfTZ6LEykgEQdHJhdmVsbGVyX2hlYWRlcpoBBWluZGV4';
        
        return cy.request({
            method: 'POST',
            url: `https://account.booking.com/api/identity/authenticate/v1.0/register/password/submit?op_token=${opToken}`,
            body: {
                authenticator: {
                    type: 'AUTHENTICATOR_TYPE__PASSWORD',
                    value: password
                },
                registrationFlow: 'standard',
                npcFlow: false,
                context: {}
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            failOnStatusCode: false
        });
    }
}

export default new AuthenticationApi();
