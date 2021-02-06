/// <reference types="Cypress"/>
import HomeAction from '../../../actions/homeAction'
import ProductAction from '../../../actions/productAction'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homeaction = new HomeAction()
const productaction = new ProductAction()

let product = 'Blouse'
let quantityProduct = '1'

Given('I am at Automation Practice', () => {

    cy.visit(Cypress.env('url'));
    
})

And('I search product blouse', function () {

    homeaction.writeSearch(product)
    homeaction.clickSearch()

})

When('I change mode grid to list', function (){

    productaction.clickModeList()

})

And('I add the product to Cart', function () {

    productaction.clickAddtoCart()
    productaction.clickContinueShopping()

})

Then('I verify the value cart is 1', function () {

    productaction.verifyValueCart(quantityProduct)


})