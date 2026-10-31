import{test , expect}from '@playwright/test';

import { LoginPage } from '../Pages/LoginPage';

import fs from 'fs';

const LoginJson = 'C:/Users/2406012/Documents/OOrangeHRM_Project/TestData/OrangeHRM.json';

 const JsonTestDat:any = JSON.parse(fs.readFileSync(LoginJson, 'utf-8'));
 

 test('Validate the Login funtionality', async ({page}) => {
  

    const LoginPageValidCredentilas = new LoginPage(page);

    await LoginPageValidCredentilas.OpenURL();
    await LoginPageValidCredentilas.EnterCredentials(

        JsonTestDat[0].Email,
        JsonTestDat[0].Password

    );

    await LoginPageValidCredentilas. VerifytheDashboard();

 });

 test('invalid test' , async ({page}) => {
 
    const LoginPageinvalidCredentials = new LoginPage(page);

    await LoginPageinvalidCredentials.OpenURL();
    await LoginPageinvalidCredentials.EnterCredentials(

      JsonTestDat[1].Email,
      JsonTestDat[1].Password

    )

    


 });