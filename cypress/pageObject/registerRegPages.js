import { ElementLocators } from "../elementLocator/elementLocator";
import faker from "faker";

const elementLocator = new ElementLocators()

export default class RegisterRegPage{
    visitHomePage(){
        cy.visit("https://sandbox-app.oexpress.co.id/register", { failOnStatusCode: false });
        
    }
    registerReg(name, password, numberPhone){
        const randomEmail = faker.internet.email();
        cy.get(elementLocator.registerNameInput).type(name);
        cy.get(elementLocator.registerEmailInput).type(randomEmail);
        cy.get(elementLocator.registerPasswordInput).type(password);
        cy.get(elementLocator.registerNumberPhone).type(numberPhone);
        cy.get(elementLocator.registerButton).click();
    }
    verifyRegisterSuccess(){
        cy.get(elementLocator.verifySuccessRegister).should('contain.text', 'Please Check Your Email!')
    }
    verifyNameGagal(){
        cy.get(elementLocator.verifyNameFailed).should('contain.text', 'name terlalu pendek.');
    }
    verifyEmailGagal(){
        cy.get(elementLocator.verifyEmailFailed).should('contain.text', 'email harus email valid.');
    }
    verifyPassGagal(){
        cy.get(elementLocator.verifyPasswordFailed).should('contain.text', 'low');
    }
    verifyNumberPhoneGagal(){
        cy.get(elementLocator.verifyNumberPhoneFailed).should('contain.text', 'phone terlalu pendek.');
    }
    verifyNumericPhoneGagal(){
        cy.get(elementLocator.verifyNumberPhoneFailed).should('contain.text', 'phone harus numerik.');
    }
    
}