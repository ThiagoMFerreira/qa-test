const FactorialPage = require("../pages/Factorial.page");
const { expect } = require("chai");

describe("Factorial Tests", function(){
beforeEach( ()=>{
    browser.url("");
    browser.maximizeWindow();        
});

    it("Verify if factorial is calculated correctly", () =>{
        FactorialPage.insertInteger('5');
        FactorialPage.clickCalculate();
        FactorialPage.messageResult('The').waitForDisplayed();
        expect(FactorialPage.messageResult('The').getText()).to.equal('The factorial of 5 is: 120');
    });

    it("Verify if is displayed error message to alpha characters", () =>{
        FactorialPage.insertInteger('aaa');
        FactorialPage.clickCalculate();
        FactorialPage.messageResult('Please').waitForDisplayed();
        expect(FactorialPage.messageResult('Please').getText()).to.equal('Please enter an integer');
    });

    it("Verify if is displayed error message to special characters", () =>{
        FactorialPage.insertInteger('!@');
        FactorialPage.clickCalculate();
        FactorialPage.messageResult('Please').waitForDisplayed();
        expect(FactorialPage.messageResult('Please').getText()).to.equal('Please enter an integer');
    });

    it("Verify if is displayed error message to float numbers", () =>{
        FactorialPage.insertInteger('1.0');
        FactorialPage.clickCalculate();
        FactorialPage.messageResult('Please').waitForDisplayed();
        expect(FactorialPage.messageResult('Please').getText()).to.equal('Please enter an integer');
    });

    it("Verify if is displayed error message to interger + alpha character", () =>{
        FactorialPage.insertInteger('1a');
        FactorialPage.clickCalculate();
        FactorialPage.messageResult('Please').waitForDisplayed();
        expect(FactorialPage.messageResult('Please').getText()).to.equal('Please enter an integer');
    });

    it("Verify if is displayed error message to negative numbers", () =>{
        FactorialPage.insertInteger('-1');
        FactorialPage.clickCalculate();
        FactorialPage.messageResult('Please').waitForDisplayed();
        expect(FactorialPage.messageResult('Please').getText()).to.equal('Please enter an integer');
    });

    it("Verify if factorial is calculated correctly to number upper than 170", () =>{
        FactorialPage.insertInteger('171');
        FactorialPage.clickCalculate();
        FactorialPage.messageResult('The').waitForDisplayed();
        expect(FactorialPage.messageResult('The').getText()).to.equal('The factorial of 171 is: 1.24101807 E+309');
    });

    it("Verify if factorial is calculated correctly to larger number", () =>{
        FactorialPage.insertInteger('999999');
        FactorialPage.clickCalculate();
        FactorialPage.messageResult('The').waitForDisplayed();
        expect(FactorialPage.messageResult('The').getText()).to.equal('The factorial of 999999 is: 8.263931688 E+5565702');
    });
    
});

describe("Check the Links", function(){
    beforeEach( ()=>{
        browser.url("");      
    });

    it("Verify if Terms and Conditions link is correct", () =>{
        FactorialPage.clickOnLink('Terms and Conditions');
        url = browser.getUrl();
        expect(url).to.equal(`${browser.options.baseUrl}/terms`);
    });

    it("Verify if Privacy link is correct", () =>{
        FactorialPage.clickOnLink('Privacy');
        url = browser.getUrl();
        expect(url).to.equal(`${browser.options.baseUrl}/privacy`);
    });
});