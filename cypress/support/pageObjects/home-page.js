class Homepage {

    getTextBoxSearch(){
        return cy.get('#search_query_top')
    }
    
    getButtonSearch(){
        return cy.get('#searchbox > .btn')
    }     

    getButtonSignIn(){
        return cy.get('a.login')
    }

    getTextLabelUser(){
        return cy.get('.account > span')
    }

    getTextLoginFailed(){
        return cy.get('ol > li')
    }

} 
export default Homepage