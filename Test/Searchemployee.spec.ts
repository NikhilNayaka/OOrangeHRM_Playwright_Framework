import{test , expect , Page}from '@playwright/test';


import fs from 'fs';
import { LoginPage } from '../Pages/LoginPage';
import { PIM } from '../Pages/PIM';
import { EmployeeListPage } from '../Pages/EmployeeListPage';

const Jsonpath = './TestData/OrangeHRM.json';
const JsonTestDat:any = JSON.parse(fs.readFileSync(Jsonpath,'utf-8'));

test('Search funtionality' , async ({page}) => {

    const loginPage = new LoginPage(page);
    const PIMPage = new PIM(page);
    const EmployeeListPage01 = new EmployeeListPage(page);

    await loginPage.OpenURL();
    
    await loginPage.EnterCredentials(
        JsonTestDat[0].Email,
        JsonTestDat[0].Password
    )

    await loginPage.VerifytheDashboard();

    await PIMPage.ClickPIM();
    await PIMPage.ClickAddBtm(JsonTestDat[0].FirstName,JsonTestDat[0].MiddleName,JsonTestDat[0].LastName);
    await PIMPage.VerifyPersonalDetailsPage();

    await EmployeeListPage01.OpenEmployeeList();
    await EmployeeListPage01.SearchEmployee(JsonTestDat[0].EMPName)

    await EmployeeListPage01.VerifySearchDashboard(JsonTestDat[0].EMPName);

    
    });
 




