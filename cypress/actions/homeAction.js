import homePage from '../pages/homePage'

const homepage = new homePage

class homeAction {

    clickSignIn(){
        return homepage.getButtonSignIn().click()
    }

    verifyUser(userExpected){
        return homepage.getTextLabelUser().should('have.text',userExpected)
    }

    writeSearch(product){
        return homepage.getTextBoxSearch().type(product)
    }

    clickSearch(){
        return homepage.getButtonSearch().click()
    }

    verifyLoginFailed(textExpected){
        return homepage.getTextLabelLoginFailed().should('have.text',textExpected)
    }

    clickContactUs(){
        return homepage.getbuttonContactUs().click()
    }


}

export default homeAction 