const elements = {
    
}

class Factorial {

    get inputField() {return $('[name=number]')};
    get calculateButton () {return $('[type=submit]')};
    messageResult (text) {return $(`//p[@id='resultDiv' and contains(.,'${text}')]`)};
    link (linkName) {return $(`//a[contains(text(), '${linkName}')]`)}; 

    insertInteger(integer){
        this.inputField.waitForEnabled();
        this.inputField.clearValue();
        this.inputField.setValue(integer);
    }

    clickCalculate(){
        this.calculateButton.waitForEnabled();
        this.calculateButton.click();
    }

    clickOnLink(linkName){
        this.link(linkName).waitForDisplayed();
        this.link(linkName).click();
    }

}

module.exports = new Factorial();