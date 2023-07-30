import LoginPage from '../pageObject/loginPages';
import testDataReg from '../fixtures/testDataReg.json';
import testDataCorp from '../fixtures/testDataCorp.json'


describe('Test UI Automation Sandbox', () => {
  
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visitHomePage();
  });

  //Negative Test Case
  it('User should failed login regular because email is not valid', () => {
    loginPage.loginReg(testDataReg.emailNotvalid, testDataReg.password);
    loginPage.verifyFailedWrongEmail();
  });

  it('User should failed login Corp because email is not valid', () => {
    loginPage.loginCorp(testDataCorp.emailNotvalid, testDataCorp.password);
    loginPage.verifyFailedWrongEmail();
  });

  it('User should login regular because wrong password', () => {
    loginPage.loginReg(testDataReg.email, testDataReg.lowPass);
    loginPage.verifyFailedWrongPass();
  });

  it('User should login corp because wrong password', () => {
    loginPage.loginCorp(testDataCorp.email, testDataCorp.lowPass);
    loginPage.verifyFailedWrongPass();
  });

  //Positive Test Case
  it('User should be successfully login Reg', () => {
    loginPage.loginReg(testDataReg.email, testDataReg.password);
    loginPage.verifySuccessLogin(testDataReg.account);
  });

  it('User should be successfully login Corp', () => {
    loginPage.loginCorp(testDataCorp.email, testDataCorp.password);
    loginPage.verifySuccessLogin(testDataCorp.account);
  });


  

});
