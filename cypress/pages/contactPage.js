import contactAction from '../actions/contactAction'
import contactLocators from '../locators/contactLocators'

const contactlocators = new contactLocators

class contactPage {

    getListSubjectHeading(){
        return cy.get(contactlocators.listSubjectHeading)
    }

    getTextBoxEmailAddress(){
        return cy.get(contactlocators.textBoxEmailAddress)
    }

    getTextBoxOrderReference(){
        return cy.get(contactlocators.textBoxOrderReference)
    }

    getTextBoxMessage(){
        return cy.get(contactlocators.textBoxMessage)
    }

    getButtonChooseFile(){
        return cy.get(contactlocators.buttonChooseFile)
    }

    getButtonSendContact(){
        return cy.get(contactlocators.buttonSendContact)
    }

    getLabelEmailSend(){
        return cy.get(contactlocators.textLabelEmailSend)
    }
}

export default contactPage