import { ElementLocators } from '../elementLocator/elementLocator';

const elementLocators = new ElementLocators();
export default class LoginPage {
  visitHomePage() {
    cy.visit('https://sandbox-app.oexpress.co.id');
  }

  loginReg(email, password) {
    cy.get(elementLocators.loginUsernameInput).type(email);
    cy.get(elementLocators.loginPasswordInput).type(password);
    cy.get(elementLocators.loginButton).click();
  }

  verifySuccessLogin(account) {
    cy.get(elementLocators.verifySuccessLogin).should('contain.text', account);
  }
 
  loginCorp(email, password) {
    cy.get(elementLocators.loginUsernameInput).type(email);
    cy.get(elementLocators.loginPasswordInput).type(password);
    cy.get(elementLocators.loginButton).click();
  }

  verifyFailedWrongEmail(){
    cy.get(elementLocators.alertWrongEmail).should('contain.text', "email harus email valid.");
  }

  verifyFailedWrongPass(){
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Kombinasi email dan password salah`)
  })
  }
}



