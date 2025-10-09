import { Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { WebDevResultPage } from '../pages/WebDevResultPage';
import { LanguagePage } from '../pages/LanguagePage';
import { SalesFormPage } from '../pages/SalesFormPage';
import { CurrentRolePage } from '../pages/CurrentRolePage';
import { SkillSelectPage } from '../pages/SkillSelectPage';
import { ExploreRolesPage } from '../pages/ExploreRolesPage';
import { FrontEndDevPage } from '../pages/FrontEndDevPage';
import { HelpPage } from '../pages/HelpPage';
import { PaymentsSubscriptionsPage } from '../pages/PaymentsSubscriptionsPage';
import { AcceptedPaymentMethodsPage } from '../pages/AcceptedPaymentMethodsPage';
import { EnterpriseResourcesPage } from '../pages/EnterpriseResourcesPage';
import { LearningPage } from '../pages/LearningPage';
import { AgileCoursePage } from '../pages/AgileCoursePage';
import { BlogPage } from '../pages/BlogPage';
import { ProductNewsPage } from '../pages/ProductNewsPage';
import { MasterDegreePage } from '../pages/MasterDegreePage';
import { ExecutiveMBAPage } from '../pages/ExecutiveMBAPage';

export class PageFixture {
    readonly page: Page;

    readonly homePage: HomePage;
    readonly webDevResultPage: WebDevResultPage;
    readonly languagePage: LanguagePage;
    readonly salesFormPage: SalesFormPage;
    readonly currentRolePage: CurrentRolePage;
    readonly skillSelectPage: SkillSelectPage;
    readonly exploreRolesPage: ExploreRolesPage;
    readonly frontEndDevPage: FrontEndDevPage;
    readonly helpPage: HelpPage;
    readonly paymentsSubscriptionsPage: PaymentsSubscriptionsPage;
    readonly acceptedPaymentMethodsPage: AcceptedPaymentMethodsPage;
    readonly enterpriseResourcesPage: EnterpriseResourcesPage;
    readonly learningPage: LearningPage;
    readonly agileCoursePage: AgileCoursePage;
    readonly blogPage: BlogPage;
    readonly productNewsPage: ProductNewsPage;
    readonly masterDegreePage: MasterDegreePage;
    readonly executiveMBAPage: ExecutiveMBAPage;

    constructor(page: Page) {
        this.page = page;

        this.homePage = new HomePage(page);
        this.webDevResultPage = new WebDevResultPage(page);
        this.languagePage = new LanguagePage(page);
        this.salesFormPage = new SalesFormPage(page);
        this.currentRolePage = new CurrentRolePage(page);
        this.skillSelectPage = new SkillSelectPage(page);
        this.exploreRolesPage = new ExploreRolesPage(page);
        this.frontEndDevPage = new FrontEndDevPage(page);
        this.helpPage = new HelpPage(page);
        this.paymentsSubscriptionsPage = new PaymentsSubscriptionsPage(page);
        this.acceptedPaymentMethodsPage = new AcceptedPaymentMethodsPage(page);
        this.enterpriseResourcesPage = new EnterpriseResourcesPage(page);
        this.learningPage = new LearningPage(page);
        this.agileCoursePage = new AgileCoursePage(page);
        this.blogPage = new BlogPage(page);
        this.productNewsPage = new ProductNewsPage(page);
        this.masterDegreePage = new MasterDegreePage(page);
        this.executiveMBAPage = new ExecutiveMBAPage(page);
    }

    get basePage(): Page {
        return this.page;
    }
}
