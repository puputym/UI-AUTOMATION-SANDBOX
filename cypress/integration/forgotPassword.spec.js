import ForgotPassword from '../pageObject/forgotPassword';
import testDataReg from '../fixtures/testDataReg.json';
import testDataCorp from '../fixtures/testDataCorp.json'


describe('Test UI Automation Sandbox', () => {
  
  const forgotPassword = new ForgotPassword();

  beforeEach(() => {
    forgotPassword.visitHomePage();
  });


  //Negative Test Case
  it('User should failed Change Password regular because email is not valid', () => {
    forgotPassword.forgotPasswordPage(testDataReg.emailTidakTedaftar);
    forgotPassword.verifyFailedForgotPassword();
  });

  it('User should failed Change Password Corp because email is not valid', () => {
    forgotPassword.forgotPasswordPage(testDataCorp.emailTidakTedaftar);
    forgotPassword.verifyFailedForgotPassword();
  });

  //Positive Test Case
  it('User should Success Change password regular', () => {
    forgotPassword.forgotPasswordPage(testDataReg.email);
    forgotPassword.verifySuccessForgotPassword();
  });

  it('User should Success Change password Corp', () => {
    forgotPassword.forgotPasswordPage(testDataCorp.email);
    forgotPassword.verifySuccessForgotPassword();
  });

 


});
