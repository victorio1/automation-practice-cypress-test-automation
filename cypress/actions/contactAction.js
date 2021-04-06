import contactPage from '../pages/contactPage'

const contactpage = new contactPage
const gatoMemePath = 'gatomeme.jpg'

class contactAction {

    selectListSubjectHeading(subjectHeading){
        return contactpage.getListSubjectHeading().select(subjectHeading)
    }

    writeEmailAddress(emailAddress){
        return contactpage.getTextBoxEmailAddress().type(emailAddress)
    }

    writeOrderReference(orderReference){
        return contactpage.getTextBoxOrderReference().type(orderReference)
    }

    writeMessage(message){
        return contactpage.getTextBoxMessage().type(message)
    }

    clickChooseFile(){
        return contactpage.getButtonChooseFile().attachFile(gatoMemePath)
    }

    clickSendContact(){
        return contactpage.getButtonSendContact().click()
    }

    verifyLabelEmailSend(textExpected){
        return contactpage.getLabelEmailSend().should('have.text', textExpected)
    }

}

export default contactAction