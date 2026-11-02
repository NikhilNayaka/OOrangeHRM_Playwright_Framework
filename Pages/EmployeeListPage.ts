import{Page , expect , test , Locator}from '@playwright/test';

export class EmployeeListPage{

    readonly page:Page;
    readonly EmployeeListMenu : Locator;
    readonly EmployeeNameSearch: Locator;
    readonly EmpSearchBTn : Locator;



    constructor(page:Page){

     this.page=page;
     this.EmployeeListMenu = page.getByRole('link', {name :"Employee List"});
     this.EmployeeNameSearch =page.getByPlaceholder('Type for hints...').first();
     this.EmpSearchBTn = page.getByRole('button' , {name: "search"});}


     async OpenEmployeeList(){


       await expect(this.EmployeeListMenu).toBeVisible();
       await this.EmployeeListMenu.waitFor();
        await this.EmployeeListMenu.click();
     }

     async SearchEmployee(EmpName: string){
        //await this.page.pause();
        await this.EmployeeNameSearch.fill(EmpName);
        await this.EmpSearchBTn.click();
     }

     async VerifySearchDashboard(EmpName:string){

        await expect(this.page.getByText(EmpName)).toBeVisible();
     }






}