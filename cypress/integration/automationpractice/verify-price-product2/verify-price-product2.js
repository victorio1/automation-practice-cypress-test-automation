/// <reference types="Cypress"/>
import Homepage from '../../../support/pageObjects/home-page'
import Productpage from '../../../support/pageObjects/product-page'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homepage = new Homepage()
const productpage = new Productpage()

let product= "";
let price = "";

Given('I am at Automation Practice',()=>{

    cy.visit(Cypress.env('url'));
    
})

And('I search Blouse', function () {
    
    homepage.getTextBoxSearch().type('Blouse')
    homepage.getButtonSearch().click()
})

When('I change mode grid to list', function() {

    productpage.getModeList().click()

})


Then('I verify price product is 27', function() {

    productpage.getLabelPriceProduct().then(function (element){
        const amount = element.text()
        var res = amount.split("$")
        var price = res[1].trim()
        expect(price).to.equal("27.00")
    })
})