import{test , expect }from '@playwright/test';
import fs from 'fs';

const Jsonpath = 'C:/Users/2406012/Documents/OOrangeHRM_Project/TestData/OrangeHRM.json';

const JsonTestDat = JSON.parse(fs.readFileSync(Jsonpath,'utf-8'));


import { LoginPage } from '../Pages/LoginPage';
import { DashboardPage } from '../Pages/DashboardPage';

test('check the logout funtionality' , async ({page}) => {

    const login = new LoginPage(page);
    const Dashboard = new DashboardPage(page);

    await login.OpenURL();
    await login.EnterCredentials(

        JsonTestDat[0].Email,
        JsonTestDat[0].Password

    )
    await login.VerifytheDashboard();
    await Dashboard.Logout();
    await Dashboard.VerifyLogout();

});