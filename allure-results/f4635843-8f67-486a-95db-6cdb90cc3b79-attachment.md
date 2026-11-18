# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> login using pom pattern
- Location: tests\pom.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | class Orange{
  2  |  constructor(page){
  3  |     this.page=page;
  4  |     this.user=page.locator('//input[@placeholder="Username"]');
  5  |     this.pass=page.locator('//input[@placeholder="Password"]');
  6  |     this.submit=page.locator('//button[text()=" Login "]');
  7  |     
  8  |  }
  9  | 
  10 |  async navigation(){
> 11 |     await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  12 |  }
  13 | 
  14 |  async login(uname,pword){
  15 |     await this.user.fill(uname)
  16 |     await this.pass.fill(pword)
  17 |     await this.submit.click()
  18 |  }
  19 |     
  20 | }
  21 | 
  22 | export default Orange;
```