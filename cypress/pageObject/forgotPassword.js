import { ElementLocators } from '../elementLocator/elementLocator';

const elementLocators = new ElementLocators();
export default class ForgotPassword {
  visitHomePage() {
    cy.visit('https://sandbox-app.oexpress.co.id');
  }

  forgotPasswordPage(email) {
    cy.get(elementLocators.forgotPasswordPage).click();
    cy.get(elementLocators.resetEmail).eq(0).type(email)
    cy.get(elementLocators.btnForgotPassword).click();
  }

  verifySuccessForgotPassword() {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Kami sudah mengirimkan link untuk reset password Anda. Tolong cek email Anda!`)
    })
  }
 
  verifyFailedForgotPassword(){
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Pengguna tidak ditemukan`)
    })
  }

}



