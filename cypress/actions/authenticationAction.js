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

}

export default authenticationAction 