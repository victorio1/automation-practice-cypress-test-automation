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

    getTextBoxCreateAccountEmailAddress(){
        return cy.get(authenticationlocators.textboxCreateAccountEmailAddress)
    }

    getButtonCreateAnAccount(){
        return cy.get(authenticationlocators.buttonCreateAnAccount)
    }

    getCheckBoxMr(){
        return cy.get(authenticationlocators.checkboxMr)
    }

    getCheckBoxMrs(){
        return cy.get(authenticationlocators.checkboxMrs)
    }

    getTextBoxFirstName(){
        return cy.get(authenticationlocators.textboxFirstName)
    }

    getTextBoxLastName(){
        return cy.get(authenticationlocators.textboxLastName)
    }

    getTextBoxCreatePassword(){
        return cy.get(authenticationlocators.textboxCreatePassword)
    }

    getListBoxDay(){
        return cy.get(authenticationlocators.listboxDay)
    }

    getListBoxMonth(){
        return cy.get(authenticationlocators.listboxMonth)
    }

    getListBoxYear(){
        return cy.get(authenticationlocators.listboxYear)
    }

    getTextBoxCompany(){
        return cy.get(authenticationlocators.textboxCompany)
    }

    getTextBoxAddress1(){
        return cy.get(authenticationlocators.textboxAddress1)
    }

    getTextBoxAddress2(){
        return cy.get(authenticationlocators.textboxAddress2)
    }

    getTextBoxCity(){
        return cy.get(authenticationlocators.textboxCity)
    }

    getListBoxState(){
        return cy.get(authenticationlocators.listboxState)
    }

    getTextBoxZip(){
        return cy.get(authenticationlocators.textboxZip)
    }

    getListBoxCountry(){
        return cy.get(authenticationlocators.listboxCountry)
    }

    getTextBoxAdditionalInformation(){
        return cy.get(authenticationlocators.textboxAdditionalInformation)
    }

    getTextBoxPhone(){
        return cy.get(authenticationlocators.textboxPhone)
    }

    getTextBoxMobilePhone(){
        return cy.get(authenticationlocators.getTextBoxMobilePhone)
    }

    getTextBoxAlias(){
        return cy.get(authenticationlocators.textboxAlias)
    }

    getButtonRegisterNewAccount(){
        return cy.get(authenticationlocators.buttonRegisterNewAccount)
    }

}

export default Authentication 