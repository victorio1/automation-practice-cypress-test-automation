import authenticationLocators from '../locators/authenticationLocators'

const authenticationlocators = new authenticationLocators()

class Authentication {

    getTextBoxEmail(){
        return cy.get(authenticationlocators.textBoxEmail)    
    }

    getTextBoxPassword(){
        return cy.get(authenticationlocators.textBoxPassword)
    }

    getButtonSignIn(){
        return cy.get(authenticationlocators.buttonSignIn)
    }

    getButtonForgotMyPassword(){
        return cy.get(authenticationlocators.buttonForgotMyPassword)
    }

    getTextBoxEmailAddress(){
        return cy.get(authenticationlocators.textboxEmailAddress)
    }

    getTextButtonRetrievePassword(){
        return cy.get(authenticationlocators.buttonRetrievePassword)
    }

    getTextLabelEmailSent(){
        return cy.get(authenticationlocators.textLabelEmailSent)
    }


}

export default Authentication 