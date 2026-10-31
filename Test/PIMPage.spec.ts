import { test } from '@playwright/test';
import fs from 'fs';

import { LoginPage } from '../Pages/LoginPage';
import { PIM } from '../Pages/PIM';

const JsonPath =
    './TestData/OrangeHRM.json';

const JsonTestDat =
    JSON.parse(
        fs.readFileSync(JsonPath, 'utf-8')
    );

test('working the PIM Page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const PIMPage = new PIM(page);

    await loginPage.OpenURL();

    await loginPage.EnterCredentials(
        JsonTestDat[0].Email,
        JsonTestDat[0].Password
    );

    await loginPage.VerifytheDashboard();

    await PIMPage.ClickPIM();

    await PIMPage.ClickAddBtm(
        JsonTestDat[0].FirstName,
        JsonTestDat[0].MiddleName,
        JsonTestDat[0].LastName
    );

    await PIMPage.VerifyPersonalDetailsPage();

});