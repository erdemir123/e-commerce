import {Login} from "../PageObject/Login"
const login =new Login()
describe('page Object Model example', () => {
    it("başarılı Login test",()=>{
        login.navigate("https://www.saucedemo.com/v1/")
        login.title("Swag Labs")
        login.username()
        login.password()
    })
});