import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Check the login functionality', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.OpenURL();

    await loginPage.EnterCredentials(
        'Admin',
        'admin123'
    );

    await loginPage.VerifytheDashboard();

});