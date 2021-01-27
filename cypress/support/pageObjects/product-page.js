class Productpage{

    getModeList(){
        return cy.get('.icon-th-list')
    }
    
    getButtonAddtoCart(){
        return cy.get('.ajax_add_to_cart_button > span')
    }

    getButtonContinueShopping(){
        return cy.get('.continue > span')
    }

    getLabelTextCartisFull(){
        return cy.get('[title="View my shopping cart"] > .ajax_cart_quantity')
    }
    
    getLabelPriceProduct(){
        return cy.get('.right-block-content > .content_price > .price')
    }
}
export default Productpage