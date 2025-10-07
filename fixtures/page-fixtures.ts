import { Page } from '@playwright/test'; 
import { HomePage } from '../pages/HomePage'; 
import { WebDevResultPage } from '../pages/WebDevResultPage'; 
import { LanguagePage } from '../pages/LanguagePage'; 
import { SalesFormPage } from '../pages/SalesFormPage'; 
import { CurrentRolePage } from '../pages/CurrentRolePage'; 
import { SkillSelectPage } from '../pages/SkillSelectPage'; 
import { SignUpPage } from '../pages/SignUpPage'; 
import { ExploreRolesPage } from '../pages/ExploreRolesPage'; 
import { FrontEndDevPage } from '../pages/FrontEndDevPage'; 
import { HelpPage } from '../pages/HelpPage'; 
import { PaymentsSubscriptionsPage } from '../pages/PaymentsSubscriptionsPage'; 
import { AcceptedPaymentMethodsPage } from '../pages/AcceptedPaymentMethodsPage'; 
import { EnterpriseResourcesPage } from '../pages/EnterpriseResourcesPage'; 
import { ArticleDetailsPage } from '../pages/ArticleDetailsPage'; 
import { OnlineDegreePage } from '../pages/OnlineDegreePage'; 
import { IITRoorkeePage } from '../pages/IITRoorkeePage'; 
import { IITRoorkeeAdmissionsPage } from '../pages/IITRoorkeeAdmissionsPage'; 
import { IITRoorkeeAcademicsPage } from '../pages/IITRoorkeeAcademicsPage'; 
import { IITRoorkeeTuitionFinancingPage } from '../pages/IITRoorkeeTuitionFinancingPage'; 
import { LearningPage } from '../pages/LearningPage'; 
 
export class PageFixture { 

    readonly page: Page; 
    readonly homePage: HomePage; 
    readonly webDevResultPage: WebDevResultPage; 
    readonly languagePage: LanguagePage; 
    readonly salesFormPage: SalesFormPage; 
    readonly currentRolePage: CurrentRolePage; 
    readonly skillSelectPage: SkillSelectPage; 
    readonly signUpPage: SignUpPage; 
    readonly exploreRolesPage: ExploreRolesPage; 
    readonly frontEndDevPage: FrontEndDevPage; 
    readonly helpPage: HelpPage; 
    readonly paymentsSubscriptionsPage: PaymentsSubscriptionsPage; 
    readonly acceptedPaymentMethodsPage: AcceptedPaymentMethodsPage; 
    readonly enterpriseResourcesPage: EnterpriseResourcesPage; 
    readonly articleDetailsPage: ArticleDetailsPage; 
    readonly onlineDegreePage: OnlineDegreePage; 
    readonly iitRoorkeePage: IITRoorkeePage; 
    readonly iitRoorkeeAdmissionsPage: IITRoorkeeAdmissionsPage; 
    readonly iitRoorkeeAcademicsPage: IITRoorkeeAcademicsPage; 
    readonly iitRoorkeeTuitionFinancingPage: IITRoorkeeTuitionFinancingPage; 
    readonly learningPage: LearningPage; 

    constructor(page: Page) { 

        this.page = page;
        this.homePage = new HomePage(page); 
        this.webDevResultPage = new WebDevResultPage(page); 
        this.languagePage = new LanguagePage(page); 
        this.salesFormPage = new SalesFormPage(page); 
        this.currentRolePage = new CurrentRolePage(page); 
        this.skillSelectPage = new SkillSelectPage(page); 
        this.signUpPage = new SignUpPage(page); 
        this.exploreRolesPage = new ExploreRolesPage(page); 
        this.frontEndDevPage = new FrontEndDevPage(page); 
        this.helpPage = new HelpPage(page); 
        this.paymentsSubscriptionsPage = new PaymentsSubscriptionsPage(page); 
        this.acceptedPaymentMethodsPage = new AcceptedPaymentMethodsPage(page); 
        this.enterpriseResourcesPage = new EnterpriseResourcesPage(page); 
        this.articleDetailsPage = new ArticleDetailsPage(page); 
        this.onlineDegreePage = new OnlineDegreePage(page); 
        this.iitRoorkeePage = new IITRoorkeePage(page); 
        this.iitRoorkeeAdmissionsPage = new IITRoorkeeAdmissionsPage(page); 
        this.iitRoorkeeAcademicsPage = new IITRoorkeeAcademicsPage(page); 
        this.iitRoorkeeTuitionFinancingPage = new IITRoorkeeTuitionFinancingPage(page); 
        this.learningPage = new LearningPage(page); 

    } 

    get basePage(): Page { 

        return this.page; 

    } 
} 
