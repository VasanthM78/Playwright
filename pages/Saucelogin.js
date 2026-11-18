class LoginPage{
    constructor(page){
        this.page=page;
        this.user=page.locator('//input[@id="user-name"]');
        this.pass=page.locator('//input[@id="password"]');
        this.submit=page.locator('//input[@id="login-button"]');
    }

    async navigation(){

        await this.page.goto("https://www.saucedemo.com/");

    }

    async login(uname,pword){
        await this.user.fill(uname);
        await this.pass.fill(pword);
        await this.submit.click();
    }
}

export default LoginPage;