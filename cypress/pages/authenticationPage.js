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

}

export default Authentication 