import { Locator, Page, expect } from '@playwright/test';
import console from 'console';

export class LoginPage {

    readonly page: Page;
    readonly tnxUserName: Locator;
    readonly tnxUserPassowrd: Locator;
    readonly LoginBtn: Locator;

    constructor(page: Page) {

        this.page = page;

        this.tnxUserName = page.locator('input[name="username"]');

        this.tnxUserPassowrd = page.locator('input[name="password"]');

        this.LoginBtn = page.locator('button[type="submit"]');
    }

    async OpenURL() {
        console.log('LOGIN PAGE FILE HIT');
    await this.page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    await expect(this.tnxUserName).toBeVisible();
}

    async EnterCredentials(
        username: string,
        passowrd: string
    ) {

        await this.tnxUserName.fill(username);

        await this.tnxUserPassowrd.fill(passowrd);

        await this.LoginBtn.click();
    }

    async VerifytheDashboard() {

        await expect(this.page).toHaveURL(/dashboard/);

    }
}