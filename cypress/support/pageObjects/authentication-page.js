class Authentication{

    getTextBoxEmail(){
        return cy.get('#email')    
    }

    getTxtBoxPassword(){
        return cy.get('#passwd')
    }

    getButtonSignIn(){
        return cy.get('#SubmitLogin > span')
    }

    getButtonForgotMyPassword(){
        return cy.get('a[title="Recover your forgotten password"]')
    }

    getTxtBoxEmailAddress(){
        return cy.get('#email')
    }

    getButtonRetrievePassword(){
        return cy.get('form#form_forgotpassword button[type="submit"]')
    }

    getTextLabelEmailSent(){
        return cy.get('.alert')
    }

}
export default Authentication 