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

}

export default homeAction 