
import{test , Page , Locator, expect}from '@playwright/test';

export class Demo{

    readonly page:Page;
    readonly UserNameButton : Locator;
    readonly UsePassowrd : Locator;
    readonly UserSubmit : Locator;

    constructor(page:Page){
    
        this.page=page;
        this.UserNameButton= page.getByPlaceholder('Username');
        this.UsePassowrd= page.getByPlaceholder('Password');
        this.UserSubmit=  page.getByRole('button' , {name : 'Login'});}

    async OpenURL(){
     
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async EnterUserCredentilas( Username : string,Passowrd : string) {

       await this.UserNameButton.fill(Username);
       await this.UsePassowrd.fill(Passowrd);
       await this.UserSubmit.click();

    }

    async VerifytheDashBoard(){

        await expect(this.page).toHaveURL(/dashboard/);
    }

}