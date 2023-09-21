import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './Home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogContactComponent } from './shared/blog-contact/blog-contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { DroneTechnologyComponent } from './drone-technology/drone-technology.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { Ng2TelInputModule} from 'ng2-tel-input';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { HowweworkComponent } from './howwework/howwework.component';
import { CareerOverviewComponent } from './career-overview/career-overview.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { ParkCaseStudiesComponent } from './park-case-studies/park-case-studies.component';
import { CaseStudyMoreComponent } from './shared/case-study-more/case-study-more.component';
import { SecondFooterComponent } from './shared/second-footer/second-footer.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { TestmonialComponent } from './shared/testmonial/testmonial.component';
import { ToastrModule } from 'ngx-toastr';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { BlockchainxsolutionComponent } from './blockchainxsolution/blockchainxsolution.component';
// import { FooddeliverysolutionComponent } from './fooddeliverysolution/fooddeliverysolution.component';
import { FintechComponent } from './fintech/fintech.component';
import { LetdiscussComponent } from './shared/letdiscuss/letdiscuss.component';
import { ArVrComponent } from './ar-vr/ar-vr.component';
import { DevopsSolutionComponent } from './devops-solution/devops-solution.component';
import { MachinelanguageComponent } from './machinelanguage/machinelanguage.component';
import { ChatsComponent } from './chats/chats.component';
import { FoodDeliveryComponent } from './food-delivery/food-delivery.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { OndemandComponent } from './ondemand/ondemand.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { LogisticComponent } from './logistic/logistic.component';
import { MediaComponent } from './media/media.component';
import { SocialnetworkComponent } from './socialnetwork/socialnetwork.component';
import { SportsComponent } from './sports/sports.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { RealestateComponent } from './realestate/realestate.component';
//add meta tag
import { Meta } from '@angular/platform-browser';
import { FintechSolutionComponent } from './fintech-solution/fintech-solution.component';
import { PythonFrameworksBlogComponent } from './blog-detial/python-frameworks-blog/python-frameworks-blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FaqComponent } from './faq/faq.component';
import { TrainingLearningComponent } from './training-learning/training-learning.component';
import { TeamCertificationsComponent } from './team-certifications/team-certifications.component';
import { EventsCelebrationsComponent } from './events-celebrations/events-celebrations.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { LetsTalkComponent } from './lets-talk/lets-talk.component';
import { MachineLearningBlogComponent } from './blog-detial/machine-learning-blog/machine-learning-blog.component';
import { HolidayKeepersCaseStudiesComponent } from './holiday-keepers-case-studies/holiday-keepers-case-studies.component';
import { ArtificialIntelligenceBlogComponent } from './blog-detial/artificial-intelligence-blog/artificial-intelligence-blog.component';
import { PodcastsComponent } from './podcasts/podcasts.component';
import { CommonModule } from '@angular/common';
import { AngMusicPlayerModule } from 'ang-music-player';
import { SidebarBlogComponent } from './blog-detial/sidebar-blog/sidebar-blog.component';
import { NpdProcessBlogComponent } from './blog-detial/npd-process-blog/npd-process-blog.component';
import { PwasBlogComponent } from './blog-detial/pwas/pwas.component';
import { DiscordLikeChatAppBlogComponent } from './blog-detial/discord-like-chat-app-blog/discord-like-chat-app-blog.component';
import { PcaNotifyNowCaseStudiesComponent } from './pca-notify-now-case-studies/pca-notify-now-case-studies.component';
import { LogisticsBlogComponent } from './blog-detial/logistics-blog/logistics-blog.component';
import { MobileApplicationDevelopmentComponent } from './mobile-application-development/mobile-application-development.component';
import { FeaturedCaseStudyComponent } from './featured-case-study/featured-case-study.component';
import { WebApplicationDevelopmentComponent } from './web-application-development/web-application-development.component';
import { CloudFirstBlogComponent } from './blog-detial/cloud-first-blog/cloud-first-blog.component';
import { UiUxDevelopmentComponent } from './ui-ux-development/ui-ux-development.component';
import { DigitalizationTrendsBlogComponent } from './blog-detial/digitalization-trends-blog/digitalization-trends-blog.component';
import { AdcDecedentCheckCaseStudiesComponent } from './adc-decedent-check-case-studies/adc-decedent-check-case-studies.component';
import { QaAndTestingComponent } from './qa-and-testing/qa-and-testing.component';
import { BlockchainDevelopmentComponent } from './blockchain-development/blockchain-development.component';
import { TechnologyStackComponent } from './shared/technology-stack/technology-stack.component';
import { FintechIndustryBlogComponent } from './blog-detial/fintech-industry-blog/fintech-industry-blog.component';
import { PostCommentComponent } from './blog-detial/post-comment/post-comment.component';
import { PostComment2Component } from './blog-detial/post-comment2/post-comment2.component';
import { FirstblastitCaseStudyComponent } from './case-studies/firstblastit-case-study/firstblastit-case-study.component';
import { SidebarBlog2Component } from './blog-detial/sidebar-blog2/sidebar-blog2.component';
import { AndroidDeveloperComponent } from './careers/android-developer/android-developer.component';
import { IosDeveloperComponent } from './careers/ios-developer/ios-developer.component';
import { LaravelDeveloperComponent } from './careers/laravel-developer/laravel-developer.component';
import { MeanStackDeveloperComponent } from './careers/mean-stack-developer/mean-stack-developer.component';
import { AngularDeveloperComponent } from './careers/angular-developer/angular-developer.component';
import { NodeDeveloperComponent } from './careers/node-developer/node-developer.component';
import { MernStackDeveloperComponent } from './careers/mern-stack-developer/mern-stack-developer.component';
import { QualityAnalystComponent } from './careers/quality-analyst/quality-analyst.component';
import { SolidityDeveloperComponent } from './careers/solidity-developer/solidity-developer.component';
import { FrontendDeveloperComponent } from './careers/frontend-developer/frontend-developer.component';
import { ReactDeveloperComponent } from './careers/react-developer/react-developer.component';
import { BusinessDevelopmentExecutiveComponent } from './careers/business-development-executive/business-development-executive.component';
import { ContentWriterComponent } from './careers/content-writer/content-writer.component';
import { SeoAnalystComponent } from './careers/seo-analyst/seo-analyst.component';
import { UiuxDesignerComponent } from './careers/uiux-designer/uiux-designer.component';
import { DevopsEngineerComponent } from './careers/devops-engineer/devops-engineer.component';
import { CareerFormComponent } from './careers/career-form/career-form.component';
import { BlogListComponent } from './shared/blog-list/blog-list.component';
import { EdiBlogComponent } from './blog-detial/edi-blog/edi-blog.component';
import { DroneDevelopmentComponent } from './drone-development/drone-development.component';
import { InternetOfThingsComponent } from './internet-of-things/internet-of-things.component';
import { HealthcareTechnologyBlogComponent } from './blog-detial/healthcare-technology-blog/healthcare-technology-blog.component';

import { DeliveryDispatchSolutionComponent } from './delivery-dispatch-solution/delivery-dispatch-solution.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TransieCasestudiesComponent } from './transie-casestudies/transie-casestudies.component';
import { LetDiscussTransgenieComponent } from './shared/let-discuss-transgenie/let-discuss-transgenie.component';
import { VideoProducerInternComponent } from './careers/video-producer-intern/video-producer-intern.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { WealthManagementDigitalTransformationBlogComponent } from './blog-detial/wealth-management-digital-transformation-blog/wealth-management-digital-transformation-blog.component';
import { TransgenieComponent } from './transgenie/transgenie.component';
import { AiBankingInsuranceBlogComponent } from './blog-detial/ai-banking-insurance-blog/ai-banking-insurance-blog.component';
import { BlockchainSupplyChainBlogComponent } from './blog-detial/blockchain-supply-chain-blog/blockchain-supply-chain-blog.component';
import { FintechFutureWealthManagementBlogComponent } from './blog-detial/fintech-future-wealth-management-blog/fintech-future-wealth-management-blog.component';
import { AppleVisionProAppDevelopmentBlogComponent } from './blog-detial/apple-vision-pro-app-development-blog/apple-vision-pro-app-development-blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BigDataAnalyticsBlogComponent } from './blog-detial/big-data-analytics-blog/big-data-analytics-blog.component';
import { MachineLearningBenefitOrderManagementBlogComponent } from './blog-detial/machine-learning-benefit-order-management-blog/machine-learning-benefit-order-management-blog.component';
import { HomeOldTestingComponent } from './home-old-testing/home-old-testing.component';
import { AiBlockchainShapingFutureTechnologyComponent } from './blog-detial/ai-blockchain-shaping-future-technology/ai-blockchain-shaping-future-technology.component';
import { FooterNewComponent } from './shared/footer-new/footer-new.component';
import { HeaderNewComponent } from './shared/header-new/header-new.component';
import { ImpactArtificialIntelligenceBlogComponent } from './blog-detial/impact-artificial-intelligence-blog/impact-artificial-intelligence-blog.component';
import { ChangingLandscapeInvestmentBankingFintechBlogComponent } from './blog-detial/changing-landscape-investment-banking-fintech-blog/changing-landscape-investment-banking-fintech-blog.component';

import { ClientsComponent } from './shared/clients/clients.component';
import { BrandsComponent } from './shared/brands/brands.component';
import { PartnersComponent } from './shared/partners/partners.component';
import { AchievementsComponent } from './shared/achievements/achievements.component';
import { ReviewsComponent } from './shared/reviews/reviews.component';
import { IndustriesComponent } from './shared/industries/industries.component';
import { InsideSparkoutComponent } from './shared/inside-sparkout/inside-sparkout.component';
import { BlogScrollComponent } from './shared/blog-scroll/blog-scroll.component';
import { ContactComponent } from './shared/contact/contact.component';
import { CasestudyScrollComponent } from './shared/casestudy-scroll/casestudy-scroll.component';
import { TechnologyComponent } from './shared/technology/technology.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { BannerScrollComponent } from './shared/banner-scroll/banner-scroll.component';
import { DevopsNewComponent } from './devops-new/devops-new.component';
import { OrderManagementBlogComponent } from './blog-detial/order-management-blog/order-management-blog.component';
import { QaAndTestingNewComponent } from './qa-and-testing-new/qa-and-testing-new.component';
import { AiNewComponent } from './ai-new/ai-new.component';
import { GenerativeAiNewComponent } from './generative-ai-new/generative-ai-new.component';
import { WebAppDevelopmentNewComponent } from './web-app-development-new/web-app-development-new.component';
import { MobileApplicationDevelopmentNewComponent } from './mobile-application-development-new/mobile-application-development-new.component';
import { UiUxDevelopmentNewComponent } from './ui-ux-development-new/ui-ux-development-new.component';
import { MachineLearningForAssetManagementEnsuresLowRiskBlogComponent } from './blog-detial/machine-learning-for-asset-management-ensures-low-risk-blog/machine-learning-for-asset-management-ensures-low-risk-blog.component';

import { GenerativeAiDrivingChangeFinancialServicesBlogComponent } from './blog-detial/generative-ai-driving-change-financial-services-blog/generative-ai-driving-change-financial-services-blog.component';
import { GenerativeAiFutureBankingIndustryBlogComponent } from './blog-detial/generative-ai-future-banking-industry-blog/generative-ai-future-banking-industry-blog.component';
import { SmartContractsRevolutionaryRoleSupplyChainManagementBlogComponent } from './blog-detial/smart-contracts-revolutionary-role-supply-chain-management-blog/smart-contracts-revolutionary-role-supply-chain-management-blog.component';
import { FabvenuesCaseStudyComponent } from './case-studies/fabvenues-case-study/fabvenues-case-study.component';
import { FirsttrackitCaseStudyComponent } from './case-studies/firsttrackit-case-study/firsttrackit-case-study.component';
import { LayeronexCaseStudyComponent } from './case-studies/layeronex-case-study/layeronex-case-study.component';
import { DeepLensCaseStudyComponent } from './case-studies/deep-lens-case-study/deep-lens-case-study.component';
import { FarmsentCaseStudyComponent } from './case-studies/farmsent-case-study/farmsent-case-study.component';
import { SupplyChainAgilityEverEvolvingWorldBlogComponent } from './blog-detial/supply-chain-agility-ever-evolving-world-blog/supply-chain-agility-ever-evolving-world-blog.component';
import { SparkoutsSixthYearAnniversaryBlogComponent } from './blog-detial/sparkouts-sixth-year-anniversary-blog/sparkouts-sixth-year-anniversary-blog.component';


import { ImagesLazyloadModule } from './shared/images-lazyload/images-lazyload.module';
import { TopTenSupplyChainManagementTrendsBlogComponent } from './blog-detial/top-ten-supply-chain-management-trends-blog/top-ten-supply-chain-management-trends-blog.component';
import { CareerNewComponent } from './career-new/career-new.component';

//import { AccordionModule } from 'ngx-accordion';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogContactComponent,
    AboutUsComponent,
    ContactusComponent,
    OurteamComponent,
    DroneTechnologyComponent,
    HowweworkComponent,
    CareerOverviewComponent,
    CasestudyComponent,
    ParkCaseStudiesComponent,
    CaseStudyMoreComponent,
    SecondFooterComponent,
    MethodologyComponent,
    TestmonialComponent,
    HealthcareComponent,
    BlockchainxsolutionComponent,
    FintechComponent,
    LetdiscussComponent,
    ArVrComponent,
    MachinelanguageComponent,
    ChatsComponent,
    FoodDeliveryComponent,
    EnterpriseComponent,
    OndemandComponent,
    EcommerceComponent,
    LogisticComponent,
    MediaComponent,
    SocialnetworkComponent,
    SportsComponent,
    BlogComponent,
    TravelComponent,
    RealestateComponent,
    FintechSolutionComponent,
    PythonFrameworksBlogComponent,
    PortfolioComponent,
    FaqComponent,
    TrainingLearningComponent,
    TeamCertificationsComponent,
    EventsCelebrationsComponent,
    PrivacyPolicyComponent,
    CookiesPolicyComponent,
    TermsConditionsComponent,
    LetsTalkComponent,
    MachineLearningBlogComponent,
    HolidayKeepersCaseStudiesComponent,
    ArtificialIntelligenceBlogComponent,
    PodcastsComponent,
    SidebarBlogComponent,
    NpdProcessBlogComponent,
    PwasBlogComponent,
    DiscordLikeChatAppBlogComponent,
    PcaNotifyNowCaseStudiesComponent,
    LogisticsBlogComponent,
    MobileApplicationDevelopmentComponent,
    FeaturedCaseStudyComponent,
    WebApplicationDevelopmentComponent,
    CloudFirstBlogComponent,
    UiUxDevelopmentComponent,
    DigitalizationTrendsBlogComponent,
    DevopsSolutionComponent,
    AdcDecedentCheckCaseStudiesComponent,
    QaAndTestingComponent,
    BlockchainDevelopmentComponent,
    TechnologyStackComponent,
    FintechIndustryBlogComponent,
    PostCommentComponent,
    PostComment2Component,
    FirstblastitCaseStudyComponent,
    SidebarBlog2Component,
    AndroidDeveloperComponent,
    IosDeveloperComponent,
    LaravelDeveloperComponent,
    MeanStackDeveloperComponent,
    AngularDeveloperComponent,
    NodeDeveloperComponent,
    MernStackDeveloperComponent,
    QualityAnalystComponent,
    SolidityDeveloperComponent,
    FrontendDeveloperComponent,
    ReactDeveloperComponent,
    BusinessDevelopmentExecutiveComponent,
    ContentWriterComponent,
    SeoAnalystComponent,
    UiuxDesignerComponent,
    DevopsEngineerComponent,
    CareerFormComponent,
    BlogListComponent,
    EdiBlogComponent,
    DroneDevelopmentComponent,
    InternetOfThingsComponent,
    HealthcareTechnologyBlogComponent,
    DeliveryDispatchSolutionComponent,
    ContactFormComponent,
    TransieCasestudiesComponent,
    LetDiscussTransgenieComponent,
    VideoProducerInternComponent,
    HomeNewComponent,
    WealthManagementDigitalTransformationBlogComponent,
    TransgenieComponent,
    AiBankingInsuranceBlogComponent,
    BlockchainSupplyChainBlogComponent,
    FintechFutureWealthManagementBlogComponent,
    AppleVisionProAppDevelopmentBlogComponent,
    NotFoundComponent,
    BigDataAnalyticsBlogComponent,
    MachineLearningBenefitOrderManagementBlogComponent,
    HomeOldTestingComponent,
    AiBlockchainShapingFutureTechnologyComponent,
    FooterNewComponent,
    HeaderNewComponent,
    ImpactArtificialIntelligenceBlogComponent,
    ChangingLandscapeInvestmentBankingFintechBlogComponent,
    SparkoutsSixthYearAnniversaryBlogComponent,

    ClientsComponent,
    BrandsComponent,
    PartnersComponent,
    AchievementsComponent,
    ReviewsComponent,
    IndustriesComponent,
    InsideSparkoutComponent,
    BlogScrollComponent,
    ContactComponent,
    CasestudyScrollComponent,
    TechnologyComponent,
    AboutusComponent,
    BannerScrollComponent,
    DevopsNewComponent,
    OrderManagementBlogComponent,
    QaAndTestingNewComponent,
    AiNewComponent,
    GenerativeAiNewComponent,
    WebAppDevelopmentNewComponent,
    MobileApplicationDevelopmentNewComponent,
    UiUxDevelopmentNewComponent,
    MachineLearningForAssetManagementEnsuresLowRiskBlogComponent,

    GenerativeAiDrivingChangeFinancialServicesBlogComponent,
    GenerativeAiFutureBankingIndustryBlogComponent,
    SmartContractsRevolutionaryRoleSupplyChainManagementBlogComponent,
    FabvenuesCaseStudyComponent,
    FirsttrackitCaseStudyComponent,
    LayeronexCaseStudyComponent,
    DeepLensCaseStudyComponent,
    FarmsentCaseStudyComponent,
    SupplyChainAgilityEverEvolvingWorldBlogComponent,
    TopTenSupplyChainManagementTrendsBlogComponent,
    CareerNewComponent,
  ],
  imports: [
    BrowserModule,
    ImagesLazyloadModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
    //Ng2TelInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngMusicPlayerModule,
    CommonModule,
    NgxSpinnerModule,
    SwiperModule,
    //AccordionModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
    }),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
