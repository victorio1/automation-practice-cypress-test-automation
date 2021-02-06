import productLocators from '../locators/productLocators'

const productlocators = new productLocators

class Productpage {

    getModeList(){
        return cy.get(productlocators.modeList)
    }
    
    getButtonAddtoCart(){
        return cy.get(productlocators.buttonAddToCart)
    }

    getButtonContinueShopping(){
        return cy.get(productlocators.buttonContinueShopping)
    }

    getLabelTextCartisFull(){
        return cy.get(productlocators.labelTextCartIsFull)
    }
    
    getLabelPriceProduct(){
        return cy.get(productlocators.labelPriceProduct)
    }
}

export default Productpage