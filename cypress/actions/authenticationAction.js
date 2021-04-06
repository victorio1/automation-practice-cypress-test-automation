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

    writeCompany(company){
        return authenticationpage.getTextBoxCompany().type(company)
    }

    writeAddress1(address1){
        return authenticationpage.getTextBoxAddress1().type(address1)
    }

    writeAddress2(address2){
        return authenticationpage.getTextBoxAddress2().type(address2)
    }

    writeCity(city){
        return authenticationpage.getTextBoxCity().type(city)
    }

    selectState(state){
        return authenticationpage.getListBoxState().select(state)
    }

    writeZip(zip){
        return authenticationpage.getTextBoxZip().type(zip)
    }

    selectCountry(country){
        return authenticationpage.getListBoxCountry().select(country)
    }

    writeAdditionalInformation(addInformation){
        return authenticationpage.getTextBoxAdditionalInformation().type(addInformation)
    }

    writeHomePhone(homePhone){
        return authenticationpage.getTextBoxPhone().type(homePhone)
    }

    writeMobilePhone(mobilePhone){
        return authenticationpage.getTextBoxMobilePhone().type(mobilePhone)
    }

    writeAlias(alias){
        return authenticationpage.getTextBoxAlias().type(alias)
    }

    clickRegister(){
        return authenticationpage.getButtonRegisterNewAccount().click()
    }

}

export default authenticationAction 