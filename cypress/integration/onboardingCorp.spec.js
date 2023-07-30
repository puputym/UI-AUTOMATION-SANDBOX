import LoginPage from '../pageObject/loginPages';
import testDataCorp from '../fixtures/testDataCorp.json';
import OnboardingCorp from '../pageObject/onboardingCorp';


describe('Test UI Automation Sandbox', () => {

  const loginPage = new LoginPage();
  const onboardingCorp = new OnboardingCorp();

  beforeEach(() => {
    loginPage.visitHomePage();
  });

  
  //Postive Test Case
  it('User should be successfully login Corp', () => {
    loginPage.loginReg(testDataCorp.email, testDataCorp.password);
    onboardingCorp.verifyLoginOnboarding();
    });
  it('User should be successfully fill onboarding page 1', () => {
    loginPage.loginReg(testDataCorp.email, testDataCorp.password);
    onboardingCorp.onboardingCorpFirst(testDataCorp.companyName, testDataCorp.companyOwner, testDataCorp.bidangUsaha, testDataCorp.nomorNPWP, testDataCorp.numTlpn, testDataCorp.email, testDataCorp.alamat, testDataCorp.lokasi);
    onboardingCorp.verifySuccessNextPage1();
    });
  it('User should be successfully fill onboarding page 2', () => {
    loginPage.loginReg(testDataCorp.email, testDataCorp.password);
    onboardingCorp.onboardingCorpSecond(testDataCorp.pengiriman, testDataCorp.numTlpn, testDataCorp.namaToko, testDataCorp.namaFinance, testDataCorp.jamstart, testDataCorp.jamEnd, testDataCorp.periodeTagihan, testDataCorp.pickUpStart, testDataCorp.pickUpEnd, testDataCorp.tickSameAddress);
    onboardingCorp.verifySuccessNextPage2();
    });
  it('User should be successfully fill onboarding page 3', () => {
    loginPage.loginReg(testDataCorp.email, testDataCorp.password);
    onboardingCorp.onboardingCorpThird();
    onboardingCorp.verifySuccessNextPage3();
    });
  it('User should be successfully fill onboarding page 4', () => {
    loginPage.loginReg(testDataCorp.email, testDataCorp.password);
    onboardingCorp.onboardingCorpFour(testDataCorp.nomorRekening, testDataCorp.namePemilikRek);
    onboardingCorp.verifyOnboardingSuccess();
  });
  

});
