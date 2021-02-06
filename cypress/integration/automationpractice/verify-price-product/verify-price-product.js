/// <reference types="Cypress"/>
import HomeAction from '../../../actions/homeAction'
import ProductAction from '../../../actions/productAction';
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const productaction = new ProductAction()
const homeaction = new HomeAction()

let product= "";
let price = "";

Given('I am at Automation Practice',()=>{

    cy.visit(Cypress.env('url'));
    
})

And("I search {string}",  (product) => {
    
    homeaction.writeSearch(product)
    homeaction.clickSearch()

})

When('I change mode grid to list', function() {

    productaction.clickModeList()

})


Then("I verify price product is {string}", (price) => {
    
    productaction.verifyPriceProductCart(price)

    
})