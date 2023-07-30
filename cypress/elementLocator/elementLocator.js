export class ElementLocators {

    //Register Regular & Corp Page
    registerNameInput = ":nth-child(1) > .form-control" 
    registerEmailInput ="form > :nth-child(2) > .form-control"
    registerPasswordInput = ".input-password > .form-control"
    registerNumberPhone = ":nth-child(4) > .form-control"
    registerButton = '.d-grid';
    verifySuccessRegister ='.mt-0'
    verifyNameFailed ='form > :nth-child(1) > .text-danger'
    verifyEmailFailed = ":nth-child(2) > .text-danger"
    verifyPasswordFailed = ".text-capitalize"
    verifyNumberPhoneFailed = ":nth-child(4) > .text-danger"

  
    // Login Page
    loginUsernameInput = ':nth-child(1) > .form-control';
    loginPasswordInput = '.input-password > .form-control';
    loginButton = '.d-grid';
    verifySuccessLogin ='.account-position'

    alertWrongPass = '.alert'
    alertWrongEmail = 'form > :nth-child(1) > .text-danger'

    //Onboarding Regular
    nameToko = ':nth-child(1) > :nth-child(1) > :nth-child(1) > .form-control'
    nameOwner = ':nth-child(2) > .form-control'
    numTlpn = ':nth-child(2) > .col-md-6 > .form-control'
    address = ':nth-child(3) > .col-md-12 > .form-control'
    provinsi = '.multiselect__tags'
    inputLokasiOpen = '.multiselect__option--highlight > span' 
    buttonLanjut = '.flex > .btn'
    verifyOnboardingLogin = '.text-center > h3'
    verifyOnboardingNextPage = '.mb-4'
    verifyOnboardingNextPage1 = 'h4'

    tickSameAddress = '#store-address'

    inputBank = '.multiselect__select'
    inputBankOpen = '#listbox-select-layout'
    inputRekening = '.row > :nth-child(2) > .form-control'
    inputNamaRekening = ':nth-child(3) > .mb-3 > .form-control'

    uploadKTP = '.dnd-uploader'
    verifyOnboarding = '.router-link-active > div > span'
    verifyBlankField = "form > :nth-child(1) > :nth-child(1) > :nth-child(1) > .text-danger"


    //Onboarding Corp
    verifyLoginOnboarding = '.modal-body > h4'

    inputCompanyName = '.row > :nth-child(1) > .form-control'
    inputOwnerName = ':nth-child(2) > .form-control'
    inputBidangUsaha = ':nth-child(3) > .form-control'
    inputNpwp = ':nth-child(4) > .form-control'
    inputNoTlpn = ':nth-child(5) > .form-control'
    inputEmail = ':nth-child(6) > .form-control'
    inputAlamat = ':nth-child(7) > .form-control'
    inputLokasi = '.multiselect__tags'
    verifyOnboardingFirst = '.--icon'
    buttonLanjut1 = '.flex > .btn'

    inputPengiriman = ':nth-child(1) > :nth-child(1) > :nth-child(1) > .form-control'
    inputNumTlpn = 'form > :nth-child(1) > :nth-child(1) > :nth-child(2) > .form-control' 
    inputNamaToko = ':nth-child(1) > :nth-child(1) > :nth-child(3) > .form-control'
    inputNamaFinance = ':nth-child(1) > :nth-child(1) > :nth-child(4) > .form-control'
    workingStart = '[name="working_hour.start"]'
    workingEnd = '[name="working_hour.end"]'
    hariKerja = ':nth-child(6) > .d-flex > :nth-child(1)'
    periodeTagihan = ':nth-child(7) > .multiselect > .multiselect__tags'
    inputPeridoeOpen = '.multiselect__content-wrapper'
    pickupStart = '[name="pickup_time.start"]'
    pickupEnd = '[name="pickup_time.end"]'
    tickSameAddress2 = '#store-address'
    payment = '#payment-type-netoff'
    tax = '#tax-ppn'
    service = '#permission-service-0'
    verifyOnboardingSecond = ':nth-child(2) > .--icon'
    buttonLanjut2 = '.btn-primary'

    uploadKTP2 = ':nth-child(1) > :nth-child(2) > :nth-child(1) > .dnd-uploader'
    uploadNPWP = ':nth-child(2) > :nth-child(2) > :nth-child(1) > .dnd-uploader'
    uploadSIUP = ':nth-child(3) > :nth-child(2) > :nth-child(1) > .dnd-uploader'
    buttonLanjut3 = '.flex > .btn-primary'
    verifyOnboardingThrid = ':nth-child(3) > .--icon > .mdi'

    inputBank2 = '.multiselect__tags'
    inputBankOpen2 = '#select-layout-1 > .multiselect__option'
    inputBankOpen3 = '#select-layout-2 > .multiselect__option'
    inputRekening2 = ':nth-child(4) > .form-control'
    inputNamaRekening2 = ':nth-child(6) > .form-control'
    buttonLanjut4 = '.btn-primary'
    verifySuccessOnboarding = '.onboard-store > .text-info'
    verifySuccessOnboarding2 = '.onboard-store > p'


    //ForgotPassword
    forgotPasswordPage = ':nth-child(2) > .text-muted'
    resetEmail = '.form-control'
    btnForgotPassword = '.btn'
  }
  