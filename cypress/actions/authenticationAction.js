import authenticatioPage from '../pages/authenticationPage'

const authenticationpage = new authenticatioPage

class authenticationAction {

    writeEmail(email){
        return authenticationpage.getTextBoxEmail().type(email)
    }

    writePassword(password){
        return authenticationpage.getTextBoxPassword().type(password)
    }

    clickSignIn(){
        return authenticationpage.getButtonSignIn().click()
    }

    clickForgotMyPassword(){
        return authenticationpage.getButtonForgotMyPassword().click()
    }

    writeEmailAddress(emailAddress){
        return authenticationpage.getTextBoxEmailAddress().type(emailAddress)
    }

    clickRetrievePassword(){
        return authenticationpage.getTextButtonRetrievePassword().click()
    }

    verifyEmailSent(text){
        return authenticationpage.getTextLabelEmailSent().should('have.text',text)
    }

}

export default authenticationAction 