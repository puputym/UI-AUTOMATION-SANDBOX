import { ElementLocators } from '../elementLocator/elementLocator';
import "cypress-file-upload";




const elementLocators = new ElementLocators();
export default class OnboardingRegular {
 

  verifyOnboardingLogin(Username){
    cy.get(elementLocators.verifyOnboardingFirst1).should('contain.text', "Selamat Datang, " + Username + "!");
  }

  onboardingRegularFirst(nameToko, nameOwner, numbertlpn, address, provinsi){
    cy.get(elementLocators.nameToko).type(nameToko);
    cy.get(elementLocators.nameOwner).type(nameOwner);
    cy.get(elementLocators.numTlpn).type(numbertlpn);
    cy.get(elementLocators.address).type(address);
    cy.get(elementLocators.provinsi).type(provinsi);
    cy.get(elementLocators.provinsi).should('be.visible');
    cy.contains(elementLocators.inputLokasiOpen, 'DKI Jakarta, Kota Jakarta Timur, Cakung').click();
    cy.get(elementLocators.buttonLanjut).click(); 
  }
  
  verifySuccessNextPage1(){
    cy.get(elementLocators.verifyOnboardingNextPage).should('contain.text', "Informasi Toko");
  }
  
  onboardingRegularSecond(){
    cy.get(elementLocators.tickSameAddress).click();
    cy.contains("Selanjutnya").click(); 
    cy.wait(3600)
    
  }
  verifySuccessNextPage2(){
    cy.get(elementLocators.verifyOnboardingNextPage).should('contain.text', "Informasi Pickup");

  }
  onboardingRegularThrid(nomorRekening, namaRekening){
    cy.get(elementLocators.inputBank).click();
    cy.get(elementLocators.inputBank).should('be.visible');
    cy.contains(elementLocators.inputBankOpen, 'BCA').click();
    cy.get(elementLocators.inputRekening).type(nomorRekening);
    cy.get(elementLocators.inputNamaRekening).type(namaRekening);
    cy.contains("Selanjutnya").click();
    
  }
  verifySuccessNextPage3(){
    cy.get(elementLocators.verifyOnboardingNextPage).should('contain.text', "Akun Bank");
    
  }

  verifySuccessNextPage4(){
    cy.contains("Verifikasi Diri");
    
  }
  onboardingRegularFour(){
    // Mendapatkan file gambar dari folder fixtures

      // // use Cypress’ abilty to handle dropzones
      cy.get(elementLocators.uploadKTP).selectFile('cypress/fixtures/ktp.png', { action: 'drag-drop' })
      cy.contains('ktp.png');
      cy.get(elementLocators.buttonLanjut).click();
  }
  verifyOnboardingSuccess() {
    cy.get(elementLocators.verifyOnboarding).should('contain.text', 'Dashboard');
  }
  failedFillOnboarding(){
    cy.get(elementLocators.buttonLanjut1).click();
    cy.get(elementLocators.verifyBlankField).should('contain.text', 'tidak boleh kosong');
  }
}



