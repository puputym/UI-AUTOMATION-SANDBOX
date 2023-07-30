import RegisterRegPage from "../pageObject/registerRegPages";
import testDataReg from "../fixtures/testDataReg.json"

describe("Test Case Register Regular Page", ()=>{
    const registerReg = new RegisterRegPage()

    beforeEach(()=>{
        registerReg.visitHomePage()
    })

    //Negative Test Case
    it("User Should failed register regular because name terlalu pendek",() =>{
        registerReg.registerReg(testDataReg.namePendek, testDataReg.password, testDataReg.numberPhone);
        registerReg.verifyNameGagal();
    })
    // it("User Should failed register regular because email not valid",() =>{
    //     registerReg.registerReg(testDataReg.name, testDataReg.emailNotvalid, testDataReg.password, testDataReg.numberPhone);
    //     registerReg.verifyEmailGagal();
    // })
    it("User Should failed register regular because Password Very Low",() =>{
        registerReg.registerReg(testDataReg.name, testDataReg.lowPass, testDataReg.numberPhone);
        registerReg.verifyPassGagal();
    })
    it("User Should failed register regular because Number Phone terlalu pendek",() =>{
        registerReg.registerReg(testDataReg.name, testDataReg.password, testDataReg.wrongNumberPhone);
        registerReg.verifyNumberPhoneGagal();
    })
    it("User Should failed register regular because Number must be numeric",() =>{
        registerReg.registerReg(testDataReg.name, testDataReg.password, testDataReg.numericNumberPhone);
        registerReg.verifyNumericPhoneGagal();
    })

    //Positive Test Case
    it("User Should successfully register regular",() =>{
        registerReg.registerReg(testDataReg.name, testDataReg.password, testDataReg.numberPhone);
        registerReg.verifyRegisterSuccess()
        
    })
    
})