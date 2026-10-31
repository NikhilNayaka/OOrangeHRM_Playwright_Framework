import{test , expect}from '@playwright/test';

import { Demo } from '../Pages/Demo';
import fs from 'fs';

const Jsonpath = 'C:/Users/2406012/Documents/OOrangeHRM_Project/TestData/OrangeHRM.json';
const JsonData:any = JSON.parse(fs.readFileSync(Jsonpath, 'utf-8'));

test('working in the Login' , async ({page}) => {

 const Demologin = new Demo(page);

 await Demologin.OpenURL();
 await Demologin.EnterUserCredentilas(
    JsonData[0].Email,
    JsonData[0].Passowrd
);


});
