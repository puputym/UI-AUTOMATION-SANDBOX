import { ElementLocators } from '../elementLocator/elementLocator';

const elementLocators = new ElementLocators();
export default class OnboardingCorp {
 

  verifyLoginOnboarding(){
    cy.contains(elementLocators.verifyLoginOnboarding, 'OnBoarding Registrasi Member');
  }
  onboardingCorpFirst(companyName, companyOwner, bidangUsaha, npwp, numTlpn, email, alamat, lokasi){
    cy.get(elementLocators.inputCompanyName).type(companyName);
    cy.get(elementLocators.inputOwnerName).type(companyOwner);
    cy.get(elementLocators.inputBidangUsaha).type(bidangUsaha);
    cy.get(elementLocators.inputNpwp).type(npwp);
    cy.get(elementLocators.inputNoTlpn).type(numTlpn);
    cy.get(elementLocators.inputEmail).type(email);
    cy.get(elementLocators.inputAlamat).type(alamat);
    cy.get(elementLocators.inputLokasi).type(lokasi);
    cy.get(elementLocators.inputLokasi).should('be.visible');
    cy.contains(elementLocators.inputLokasiOpen, 'DKI Jakarta, Kota Jakarta Timur, Cakung').click();
    cy.get(elementLocators.buttonLanjut1).click();
  }
  verifySuccessNextPage1(){
    cy.contains(elementLocators.verifyOnboardingFirst);
  }

  onboardingCorpSecond(pengiriman, numTlpn, namaToko, namaFinance, jamStart, jamEnd, periodeTagihan, pickupStart, pickupEnd){
    cy.get(elementLocators.inputPengiriman).type(pengiriman);
    cy.get(elementLocators.inputNumTlpn).type(numTlpn);
    cy.get(elementLocators.inputNamaToko).type(namaToko);
    cy.get(elementLocators.inputNamaFinance).type(namaFinance);
    cy.get(elementLocators.workingStart).type(jamStart);
    cy.get(elementLocators.workingEnd).type(jamEnd);
    cy.get(elementLocators.hariKerja).click();
    cy.get(elementLocators.periodeTagihan).type(periodeTagihan);
    cy.get(elementLocators.periodeTagihan).should('be.visible');
    cy.contains(elementLocators.inputPeridoeOpen, 'Mingguan').click();
    cy.get(elementLocators.pickupStart).type(pickupStart)
    cy.get(elementLocators.pickupEnd).type(pickupEnd);
    cy.get(elementLocators.tickSameAddress).click();
    cy.get(elementLocators.payment).click();
    cy.get(elementLocators.tax).click();
    cy.get(elementLocators.service).click();
    cy.get(elementLocators.buttonLanjut2).click();
  }

  verifySuccessNextPage2(){
    cy.contains(elementLocators.verifyOnboardingSecond);
  }

  onboardingCorpThird(){
    // Mendapatkan file gambar dari folder fixtures
     cy.get(elementLocators.uploadKTP2).selectFile('cypress/fixtures/ktp.png', { action: 'drag-drop' })
     cy.contains('ktp.png');
     cy.get(elementLocators.uploadNPWP).selectFile('cypress/fixtures/npwp.png', { action: 'drag-drop' })
     cy.contains('npwp.png');
     cy.get(elementLocators.uploadSIUP).selectFile('cypress/fixtures/Siup.png', { action: 'drag-drop' })
     cy.contains('Siup.png');
     cy.get(elementLocators.buttonLanjut3).click();

  }
  verifySuccessNextPage3(){
    cy.contains(elementLocators.verifyOnboardingThrid);
  }

  onboardingCorpFour(nomorRekening, namaRekening){
    cy.get(elementLocators.inputBank2).click();
    cy.get(elementLocators.inputBank2).should('be.visible');
    cy.contains(elementLocators.inputBankOpen2, 'BCA Syariah').click();
    cy.get(elementLocators.inputRekening2).type(nomorRekening);
    cy.get(elementLocators.inputNamaRekening2).type(namaRekening);
  }
  verifyOnboardingSuccess() {
    cy.get(elementLocators.verifySuccessOnboarding).should('contain.text', 'Berhasil');
    cy.get(elementLocators.verifyOnboverifySuccessOnboardingardingFirst).should('contain.text', 'Data anda yang diisi telah disimpan');
  }
}



