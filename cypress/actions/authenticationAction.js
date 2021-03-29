import authenticationLocators from '../locators/authenticationLocators'
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

    writeEmailforCreateAnAccount(EmailForCreateAccount){
        return authenticationpage.getTextBoxCreateAccountEmailAddress().type(EmailForCreateAccount)
    }

    clickCreateAnAccount(){
        return authenticationpage.getButtonCreateAnAccount().click()
    }

    clickTittleMr(){
        return authenticationpage.getCheckBoxMr().click()
    }

    clickTittleMrs(){
        return authenticationpage.getCheckBoxMrs().click()
    }

    writeFirstName(firstName){
        return authenticationpage.getTextBoxFirstName().type(firstName)
    }

    writeLastName(lastName){
        return authenticationpage.getTextBoxLastName().type(lastName)
    }

    writeCreatePassword(password){
        return authenticationpage.getTextBoxCreatePassword().type(password)
    }

    selectDay(day){
        return authenticationpage.getListBoxDay().select(day)
    }

    selectMonth(month){
        return authenticationpage.getListBoxMonth().select(month)
    }

    selectYear(year){
        return authenticationpage.getListBoxYear().select(year)
    }


}

export default authenticationAction 