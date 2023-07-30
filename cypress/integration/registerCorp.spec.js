import RegisterCorpPage from "../pageObject/registerCorpPages";
import testDataCorp from "../fixtures/testDataCorp.json"

describe("Test Case Register Corp Page", ()=>{
    const registerCorpPages = new RegisterCorpPage()

    beforeEach(()=>{
        registerCorpPages.visitHomePage()
    })

    //Negative Test Case
    it("User Should failed register corp because name terlalu pendek",() =>{
        registerCorpPages.registerCorp(testDataCorp.namePendek, testDataCorp.password, testDataCorp.numberPhone);
        registerCorpPages.verifyNameGagal();
    })
    // it("User Should failed register corp because email not valid",() =>{
    //     registerCorpPages.registerCorp(testDataCorp.name, testDataCorp.emailNotvalid, testDataCorp.password, testDataCorp.numberPhone);
    //     registerCorpPages.verifyEmailGagal();
    // })
    it("User Should failed register corp because Password Very Low",() =>{
        registerCorpPages.registerCorp(testDataCorp.name, testDataCorp.lowPass, testDataCorp.numberPhone);
        registerCorpPages.verifyPassGagal();
    })
    it("User Should failed register corp because Number Phone terlalu pendek",() =>{
        registerCorpPages.registerCorp(testDataCorp.name, testDataCorp.password, testDataCorp.wrongNumberPhone);
        registerCorpPages.verifyNumberPhoneGagal();
    })
    it("User Should failed register corp because Number must be numeric",() =>{
        registerCorpPages.registerCorp(testDataCorp.name, testDataCorp.password, testDataCorp.numericNumberPhone);
        registerCorpPages.verifyNumericPhoneGagal();
    })

    //Positive Test Case
    it("User Should successfully register corp",() =>{
        registerCorpPages.registerCorp(testDataCorp.name, testDataCorp.password, testDataCorp.numberPhone);
        registerCorpPages.verifyRegisterSuccess()
    })
    
})