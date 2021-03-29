/// <reference types="Cypress"/>
import HomeAction from '../../../actions/homeAction'
import ProductAction from '../../../actions/productAction'

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const productaction = new ProductAction()
const homeaction = new HomeAction()

Given('I am at Automation Practice', () => {

    cy.visit(Cypress.env('url'));

})

And('I search product blouse', function () {

    homeaction.writeSearch('Blouse')
    homeaction.clickSearch()

})

When('I change mode grid to list', function () {

    productaction.clickModeList()

})

And('I add the product to Cart', function () {

    productaction.clickAddtoCart()
    productaction.clickContinueShopping()

})

Then('I verify the value cart is 1', function () {

    productaction.verifyValueCart('1')
})

And("I search {string}", (product) => {

    homeaction.writeSearch(product)
    homeaction.clickSearch()
})

Then("I verify price product is {string}", (price) => {

    productaction.verifyPriceProductCart(price)

})

And('I search Blouse', function () {

    homeaction.writeSearch('Blouse')
    homeaction.clickSearch()
})

Then('I verify price product is 27', function() {

    productaction.verifyPriceProductCart("27.00")
})