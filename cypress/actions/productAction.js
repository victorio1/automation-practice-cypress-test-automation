import productPage from '../pages/productPage'

const productpage = new productPage

class productAction {

    clickModeList(){
        return productpage.getModeList().click()
    }

    clickAddtoCart(){
        return productpage.getButtonAddtoCart().click()
    }

    clickContinueShopping(){
        return productpage.getButtonContinueShopping().click()
    }

    verifyValueCart(quantityProduct){
        return productpage.getLabelTextCartisFull().should('have.text',quantityProduct)
    }

    verifyPriceProductCart(price){
        return productpage.getLabelPriceProduct().then(function (element){
            const amount = element.text()
            var res = amount.split("$")
            var price = res[1].trim()
            expect(price).to.equal(price)
        })
    }

}

export default productAction 