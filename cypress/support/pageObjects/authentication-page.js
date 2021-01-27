class Authentication{

    getTextBoxEmail(){
        return cy.get('#email')    
    }

    getTxtBoxPassword(){
        return cy.get('#passwd')
    }

    getButtonSignIn(){
        return cy.get('#SubmitLogin > span')
    }

}
export default Authentication 