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
