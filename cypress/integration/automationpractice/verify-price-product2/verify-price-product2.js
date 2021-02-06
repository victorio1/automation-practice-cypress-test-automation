/// <reference types="Cypress"/>
import HomeAction from '../../../actions/homeAction'
import ProductAction from '../../../actions/productAction';
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homeaction = new HomeAction()
const productaction = new ProductAction()

let product= "Blouse";
let price = "27.00";

Given('I am at Automation Practice',()=>{

    cy.visit(Cypress.env('url'));
    
})

And('I search Blouse', function () {
    
    homeaction.writeSearch(product)
    homeaction.clickSearch()
})

When('I change mode grid to list', function() {

    productaction.clickModeList()

})


Then('I verify price product is 27', function() {

    productaction.verifyPriceProductCart(price)

})