import { Page, Locator, expect } from '@playwright/test';

export class PIM {

    readonly page: Page;
    readonly PIMMenu: Locator;
    readonly AddEmployee: Locator;
    readonly FirstName: Locator;
    readonly MiddleName: Locator;
    readonly LastName: Locator;
    readonly SaveBtn: Locator;

    constructor(page: Page) {

        this.page = page;

        this.PIMMenu =
            page.getByRole('link', { name: 'PIM' });

        this.AddEmployee =
            page.getByRole('link', { name: 'Add Employee' });

        this.FirstName =
            page.getByPlaceholder('First Name');

        this.MiddleName =
            page.locator('input[name="middleName"]');

        this.LastName =
            page.locator('input[name="lastName"]');

        this.SaveBtn =
            page.getByRole('button', { name: 'Save' });
    }

    async ClickPIM() {

        await this.PIMMenu.click();

    }

    async ClickAddBtm(
        firstName: string,
        middleName: string,
        lastName: string
    ) {

        await this.AddEmployee.click();

        await this.FirstName.fill(firstName);

        await this.MiddleName.fill(middleName);

        await this.LastName.fill(lastName);

        await this.SaveBtn.click();
        await expect(this.page.getByText('Successfully Saved')).toBeVisible();

    }

    async VerifyPersonalDetailsPage() {

        await this.page.waitForTimeout(2000)

        console.log(
            'Current URL : ',
            await this.page.url()
        );

        
    }

}