import LoginPage from '../pageObject/loginPages';
import testDataReg from '../fixtures/testDataReg.json';
import OnboardingRegular from '../pageObject/onboardingRegular';
describe('Test UI Automation Sandbox', () => {

  const loginPage = new LoginPage();
  const onboardingRegular = new OnboardingRegular();

  beforeEach(() => {
    loginPage.visitHomePage();
  });

  //Negative Test case
  it('User can not directed to next page because the field did not blank', () => {
    loginPage.loginReg(testDataReg.emailForOnboarding, testDataReg.password);
    onboardingRegular.failedFillOnboarding()
  });


  //Postive Test Case
  it('User should be successfully login Reg', () => {
    loginPage.loginReg(testDataReg.emailForOnboarding, testDataReg.password);
    //onboardingRegular.verifyOnboardingLogin(testDataReg.name);
    //onboardingRegular.verifySuccessNextPage1();
  });
  
  it('User should be successfully fill onboarding page 1', () => {
    loginPage.loginReg(testDataReg.emailForOnboarding, testDataReg.password);
    onboardingRegular.onboardingRegularFirst(testDataReg.nameToko, testDataReg.nameOwner, testDataReg.numberPhone, testDataReg.adress, testDataReg.provinsi);
  });
  it('User should be successfully fill onboarding page 2',  ()=> {
    loginPage.loginReg(testDataReg.emailForOnboarding, testDataReg.password);
    onboardingRegular.onboardingRegularSecond(testDataReg.nameToko, testDataReg.nameOwner, testDataReg.numberPhone, testDataReg.adress, testDataReg.provinsi);
  });
  it('User should be successfully fill onboarding page 3', () => {
    loginPage.loginReg(testDataReg.emailForOnboarding, testDataReg.password);
    onboardingRegular.onboardingRegularThrid(testDataReg.nomorRekening, testDataReg.namePemilikRek);
  }); 
  it('User should be successfully fill onboarding page 4', () => {
    loginPage.loginReg(testDataReg.emailForOnboarding, testDataReg.password);
    onboardingRegular.onboardingRegularFour();
    onboardingRegular.verifyOnboardingSuccess();
  });

});
