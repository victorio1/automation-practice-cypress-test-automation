import homeLocators from '../locators/homeLocators'

const homelocators = new homeLocators

class Homepage {

    getTextBoxSearch(){
        return cy.get(homelocators.textBoxSearch)
    }
    
    getButtonSearch(){
        return cy.get(homelocators.buttonSearch)
    }     

    getButtonSignIn(){
        return cy.get(homelocators.buttonSignIn)
    }

    getTextLabelUser(){
        return cy.get(homelocators.textLabelUser)
    }

    getTextLabelLoginFailed(){
        return cy.get(homelocators.textLabelLoginFailed)
    }

} 

export default Homepage