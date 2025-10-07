<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Page} from '@playwright/test'; 

  

export class BasePage { 

    protected page: Page; 

  

    constructor(page: Page) { 

        this.page = page; 

    } 

   

    async click(locator: string) { 

        await this.page.locator(locator).click(); 

    } 

  

    async type(locator: string, value: string) { 

        await this.page.locator(locator).fill(value); 

    } 

  

    async getText(locator: string) { 

        return await this.page.locator(locator).innerText(); 

    } 

  

    async hover(locator: string) { 

        await this.page.locator(locator).hover(); 

    } 

  

    async navigateTo(url: string) { 

        await this.page.goto(url); 

    } 

  

    async waitForTimeout(timeout: number) { 

        await this.page.waitForTimeout(timeout); 

    } 

  

} 
=======
<<<<<<< HEAD
>>>>>>> 93c17beb5f1f341bc73e7b79e7896324796c9bb6
import {Page} from '@playwright/test';
 
export class BasePage {
 
    protected page: Page;
<<<<<<< HEAD
    constructor(page: Page) {
        this.page = page;
    }
 
    async click(locator: string) {
        await this.page.locator(locator).click();
    }
 
    async type(locator: string, value: string) {
        await this.page.locator(locator).fill(value);
    }
 
    async getText(locator: string) {
        return await this.page.locator(locator).innerText();
    }
 
    async hover(locator: string) {
        await this.page.locator(locator).hover();
    }
 
    async navigateTo(url: string) {
=======
    constructor(page: Page) { 
        this.page = page; 
    }

    async click(locator: string) { 
        await this.page.locator(locator).click();
    }
  
    async type(locator: string, value: string) { 
        await this.page.locator(locator).fill(value); 
    }
  
    async getText(locator: string) { 
        return await this.page.locator(locator).innerText(); 
    }
 
    async hover(locator: string) { 
        await this.page.locator(locator).hover(); 
    }
 
    async navigateTo(url: string) { 
>>>>>>> 93c17beb5f1f341bc73e7b79e7896324796c9bb6
        await this.page.goto(url);
 
    }
 
<<<<<<< HEAD
    async waitForTimeout(timeout: number) {
=======
    async waitForTimeout(timeout: number) { 
>>>>>>> 93c17beb5f1f341bc73e7b79e7896324796c9bb6
        await this.page.waitForTimeout(timeout);
    }
}
 
<<<<<<< HEAD
 
=======
=======
import {Page} from '@playwright/test'; 
export class BasePage { 
    protected page: Page; 
    constructor(page: Page) { 
        this.page = page; 
    } 
    async click(locator: string) { 
        await this.page.locator(locator).click(); 
    } 
    async type(locator: string, value: string) { 
        await this.page.locator(locator).fill(value); 
    } 
    async getText(locator: string) { 
        return await this.page.locator(locator).innerText();
    } 
    async hover(locator: string) { 
        await this.page.locator(locator).hover(); 
    } 
    async navigateTo(url: string) { 
        await this.page.goto(url); 
    } 
    async waitForTimeout(timeout: number) { 
        await this.page.waitForTimeout(timeout); 
    } 
} 
>>>>>>> 397cb4360fd3f17a73b7ee1f7d166d1c5dbec010
>>>>>>> 3c9148c480731868c503c6426cdc9372259338bc
>>>>>>> a9cc077c14c004871b727eee82116a2c1d4ea223
>>>>>>> 93c17beb5f1f341bc73e7b79e7896324796c9bb6
