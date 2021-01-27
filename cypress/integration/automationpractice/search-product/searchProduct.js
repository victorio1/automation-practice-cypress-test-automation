/// <reference types="Cypress"/>
import Homepage from '../../../support/pageObjects/home-page'
import Productpage from '../../../support/pageObjects/product-page'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homepage = new Homepage()
const productpage = new Productpage()

Given('I am at Automation Practice', () => {

    cy.visit(Cypress.env('url'));
    
})

And('I search product blouse', function () {

    homepage.getTextBoxSearch().type('Blouse')
    homepage.getButtonSearch().click()

})

When('I change mode grid to list', function (){

    productpage.getModeList().click()

})

And('I add the product to Cart', function () {

    productpage.getButtonAddtoCart().click()
    productpage.getButtonContinueShopping().click()

})

Then('I verify the value cart is 1', function () {

    productpage.getLabelTextCartisFull().should('have.text','1')

})