import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {

    readonly page: Page;
    readonly profileIcon: Locator;
    readonly logoutBtn: Locator;

    constructor(page: Page) {

        this.page = page;

        this.profileIcon =
            page.locator('.oxd-userdropdown-tab');

        this.logoutBtn =
            page.getByText('Logout');
    }

    async Logout() {

        // Verify dashboard loaded
        await expect(this.profileIcon).toBeVisible();

        // Wait for page to become stable
        await this.page.waitForLoadState('networkidle');

        // Click profile menu
        await this.profileIcon.click();

        // Wait for logout option
        await expect(this.logoutBtn).toBeVisible();

        // Click logout
        await this.logoutBtn.click();
    }

    async VerifyLogout() {

        await expect(this.page).toHaveURL(/login/);

        await expect(
            this.page.locator('input[name="username"]')
        ).toBeVisible();
    }
}