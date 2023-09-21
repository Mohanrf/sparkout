import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './Home/home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { DroneTechnologyComponent } from './drone-technology/drone-technology.component';
import { HowweworkComponent } from './howwework/howwework.component';
import { CareerOverviewComponent } from './career-overview/career-overview.component';
import { CasestudyComponent } from './casestudy/casestudy.component';
import { ParkCaseStudiesComponent } from './park-case-studies/park-case-studies.component';
import { MethodologyComponent } from './methodology/methodology.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { BlockchainxsolutionComponent } from './blockchainxsolution/blockchainxsolution.component';
import { FintechComponent } from './fintech/fintech.component';
//import { MobileApplicationComponent } from './mobile-application/mobile-application.component';
//import { WebDevlopmentComponent } from './web-devlopment/web-devlopment.component';
import { ArVrComponent } from './ar-vr/ar-vr.component';
//import { QatestingComponent } from './qatesting/qatesting.component';
import { DevopsSolutionComponent } from './devops-solution/devops-solution.component';
import { MachinelanguageComponent } from './machinelanguage/machinelanguage.component';
//import { UserinterfaceComponent } from './userinterface/userinterface.component';
import { UiUxDevelopmentComponent } from './ui-ux-development/ui-ux-development.component';
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
import { FintechSolutionComponent } from './fintech-solution/fintech-solution.component';
import { PythonFrameworksBlogComponent } from './blog-detial/python-frameworks-blog/python-frameworks-blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { FaqComponent } from './faq/faq.component';
// import { EventsCelebrationsComponent } from './events-celebrations/events-celebrations.component';
// import { TeamCertificationsComponent } from './team-certifications/team-certifications.component';
// import { TrainingLearningComponent } from './training-learning/training-learning.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CookiesPolicyComponent } from './cookies-policy/cookies-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
// import { LetsTalkComponent } from './lets-talk/lets-talk.component';
import { MachineLearningBlogComponent } from './blog-detial/machine-learning-blog/machine-learning-blog.component';
import { HolidayKeepersCaseStudiesComponent } from './holiday-keepers-case-studies/holiday-keepers-case-studies.component';
import { ArtificialIntelligenceBlogComponent } from './blog-detial/artificial-intelligence-blog/artificial-intelligence-blog.component';
// import { PodcastsComponent } from './podcasts/podcasts.component';
import { NpdProcessBlogComponent } from './blog-detial/npd-process-blog/npd-process-blog.component';
import { PwasBlogComponent } from './blog-detial/pwas/pwas.component';
import { DiscordLikeChatAppBlogComponent } from './blog-detial/discord-like-chat-app-blog/discord-like-chat-app-blog.component';
import { PcaNotifyNowCaseStudiesComponent } from './pca-notify-now-case-studies/pca-notify-now-case-studies.component';
import { LogisticsBlogComponent } from './blog-detial/logistics-blog/logistics-blog.component';
import { MobileApplicationDevelopmentComponent } from './mobile-application-development/mobile-application-development.component';
import { WebApplicationDevelopmentComponent } from './web-application-development/web-application-development.component';
import { CloudFirstBlogComponent } from './blog-detial/cloud-first-blog/cloud-first-blog.component';
import { DigitalizationTrendsBlogComponent } from './blog-detial/digitalization-trends-blog/digitalization-trends-blog.component';
import { AdcDecedentCheckCaseStudiesComponent } from './adc-decedent-check-case-studies/adc-decedent-check-case-studies.component';
import { QaAndTestingComponent } from './qa-and-testing/qa-and-testing.component';
import { BlockchainDevelopmentComponent } from './blockchain-development/blockchain-development.component';
import { FintechIndustryBlogComponent } from './blog-detial/fintech-industry-blog/fintech-industry-blog.component';
import { FirstblastitCaseStudyComponent } from './case-studies/firstblastit-case-study/firstblastit-case-study.component';
// import { AndroidDeveloperComponent } from './careers/android-developer/android-developer.component';
// import { IosDeveloperComponent } from './careers/ios-developer/ios-developer.component';
 import { LaravelDeveloperComponent } from './careers/laravel-developer/laravel-developer.component';
// import { MeanStackDeveloperComponent } from './careers/mean-stack-developer/mean-stack-developer.component';
import { AngularDeveloperComponent } from './careers/angular-developer/angular-developer.component';
// import { NodeDeveloperComponent } from './careers/node-developer/node-developer.component';
// import { MernStackDeveloperComponent } from './careers/mern-stack-developer/mern-stack-developer.component';
// import { QualityAnalystComponent } from './careers/quality-analyst/quality-analyst.component';
// import { SolidityDeveloperComponent } from './careers/solidity-developer/solidity-developer.component';
// import { FrontendDeveloperComponent } from './careers/frontend-developer/frontend-developer.component';
// import { ReactDeveloperComponent } from './careers/react-developer/react-developer.component';
 import { BusinessDevelopmentExecutiveComponent } from './careers/business-development-executive/business-development-executive.component';
// import { ContentWriterComponent } from './careers/content-writer/content-writer.component';
// import { SeoAnalystComponent } from './careers/seo-analyst/seo-analyst.component';
// import { UiuxDesignerComponent } from './careers/uiux-designer/uiux-designer.component';
// import { DevopsEngineerComponent } from './careers/devops-engineer/devops-engineer.component';
import { EdiBlogComponent } from './blog-detial/edi-blog/edi-blog.component';
import { DroneDevelopmentComponent } from './drone-development/drone-development.component';
import { InternetOfThingsComponent } from './internet-of-things/internet-of-things.component';
import { HealthcareTechnologyBlogComponent } from './blog-detial/healthcare-technology-blog/healthcare-technology-blog.component';
import { DeliveryDispatchSolutionComponent } from './delivery-dispatch-solution/delivery-dispatch-solution.component';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
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
import { AiBlockchainShapingFutureTechnologyComponent } from './blog-detial/ai-blockchain-shaping-future-technology/ai-blockchain-shaping-future-technology.component';
import { ImpactArtificialIntelligenceBlogComponent } from './blog-detial/impact-artificial-intelligence-blog/impact-artificial-intelligence-blog.component';
import { ChangingLandscapeInvestmentBankingFintechBlogComponent } from './blog-detial/changing-landscape-investment-banking-fintech-blog/changing-landscape-investment-banking-fintech-blog.component';

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
import { TopTenSupplyChainManagementTrendsBlogComponent } from './blog-detial/top-ten-supply-chain-management-trends-blog/top-ten-supply-chain-management-trends-blog.component';
import { CareerNewComponent } from './career-new/career-new.component';


const routes: Routes = [
  // { path: 'home-old', component: HomeComponent },
  { path: '', component: HomeNewComponent },
  { path: 'wealth-management-digital-transformation', component: WealthManagementDigitalTransformationBlogComponent},
  // { path: 'mobile-application-development-old', component: MobileApplicationDevelopmentComponent},
  { path: 'mobile-application-development', component:MobileApplicationDevelopmentNewComponent},
  // { path: 'web-application-development-old', component: WebApplicationDevelopmentComponent},
  { path: 'web-application-development', component:WebAppDevelopmentNewComponent},
  // { path: 'ui-ux-development-old', component: UiUxDevelopmentComponent },
  { path: 'ui-ux-development', component: UiUxDevelopmentNewComponent },
  // { path: 'quality-assurance-and-testing-services-old', component: QaAndTestingComponent},
  { path: 'quality-assurance-and-testing-services', component: QaAndTestingNewComponent},
  // { path: 'devops-services-old', component: DevopsSolutionComponent },
  { path: 'devops-services', component: DevopsNewComponent },
  { path: 'blockchain-development-company', component: BlockchainDevelopmentComponent},
  { path: 'drone-software-development', component: DroneDevelopmentComponent },
  { path: 'ar-vr-application-development', component: ArVrComponent },
  // { path: 'machine-learning-development-old', component: MachinelanguageComponent },
  { path: 'artificial-intelligence-application-development-company', component: AiNewComponent },
  { path: 'generative-ai-development', component:GenerativeAiNewComponent},
  { path: 'internet-of-things', component: InternetOfThingsComponent },
  { path: 'ai-blockchain-shaping-future-technology', component: AiBlockchainShapingFutureTechnologyComponent},

  { path: 'enterprise-software-development', component: EnterpriseComponent },
  { path: 'fintech-application-development', component: FintechSolutionComponent},

  { path: 'ecommerce-application-development', component: EcommerceComponent },
  { path: 'on-demand-application-development', component: OndemandComponent },
  { path: 'online-food-delivery-solution', component: FoodDeliveryComponent },
  { path: 'chat-application-development', component: ChatsComponent },


  { path: 'real-estate-application-development', component: RealestateComponent},
  { path: 'travel-application-development', component: TravelComponent },
  { path: 'sports-application-development', component: SportsComponent },
  { path: 'social-media-application-development', component: SocialnetworkComponent},
  { path: 'fintech-application-development', component: FintechComponent },
  { path: 'media-and-entertainment-application-development', component: MediaComponent},
  { path: 'logistics-application-development', component: LogisticComponent },
  { path: 'healthcare-application-development', component: HealthcareComponent},


  { path: 'about-us', component: AboutUsComponent },
  { path: 'who-we-are', component: OurteamComponent },
  { path: 'how-we-work', component: HowweworkComponent },
  { path: 'development-methodology', component: MethodologyComponent },
  { path: 'career-new', component:CareerNewComponent},

  // { path: 'career', component: CareerOverviewComponent },
  { path: 'careers/php-developer', component: LaravelDeveloperComponent },
  { path: 'careers/business-development-executive', component: BusinessDevelopmentExecutiveComponent},
  // { path: 'careers/video-producer-intern', component: VideoProducerInternComponent},

  // { path: 'careers/mean-stack-developer', component: MeanStackDeveloperComponent},
  { path: 'careers/angular-developer', component: AngularDeveloperComponent },
  // { path: 'careers/node-developer', component: NodeDeveloperComponent },
  // { path: 'careers/mern-stack-developer', component: MernStackDeveloperComponent},

  // { path: 'careers/quality-analyst', component: QualityAnalystComponent },
  // { path: 'careers/solidity-developer', component: SolidityDeveloperComponent },
  // { path: 'careers/frontend-developer', component: FrontendDeveloperComponent },
  // { path: 'careers/android-developer', component: AndroidDeveloperComponent },
  // { path: 'careers/ios-developer', component: IosDeveloperComponent },
  // { path: 'careers/react-developer', component: ReactDeveloperComponent },

  // { path: 'careers/content-writer', component: ContentWriterComponent },
  // { path: 'careers/digital-marketing-executive', component: SeoAnalystComponent},
  // { path: 'careers/uiux-designer', component: UiuxDesignerComponent },
  // { path: 'careers/devops-engineer', component: DevopsEngineerComponent },


  { path: 'contact-us', component: ContactusComponent },

  // { path:'occasions', component:EventsCelebrationsComponent},
  // { path:'team-certifications', component:TeamCertificationsComponent},
  // { path:'skill-building', component:TrainingLearningComponent},
  // { path:'faq', component:FaqComponent},


  { path: 'blog', component: BlogComponent },
  { path: 'python-frameworks', component: PythonFrameworksBlogComponent },
  { path: 'machine-learning-in-healthcare', component: MachineLearningBlogComponent},
  { path: 'artificial-intelligence-in-business', component: ArtificialIntelligenceBlogComponent},
  { path: 'stages-of-new-product-development-process', component: NpdProcessBlogComponent},
  { path: 'progressive-web-apps-rise', component: PwasBlogComponent },
  { path: 'build-chat-app-like-discord', component: DiscordLikeChatAppBlogComponent},
  { path: 'digital-trends-transforming-logistics-industry', component: LogisticsBlogComponent},
  { path: 'why-its-better-to-be-cloud-smart-than-cloud-first', component: CloudFirstBlogComponent},
  { path: 'digital-transformation-of-manufacturing-industries', component: DigitalizationTrendsBlogComponent},
  { path: 'technologies-shaping-the-future-of-fintech', component: FintechIndustryBlogComponent},
  { path: 'everything-you-need-to-know-about-edi', component: EdiBlogComponent},
  { path: 'emerging-digital-health-technology', component: HealthcareTechnologyBlogComponent},
  { path: 'impact-artificial-intelligence-banking-and-insurance-industry', component: AiBankingInsuranceBlogComponent},
  { path: 'blockchain-supply-chain-innovations-trends-2023', component: BlockchainSupplyChainBlogComponent},
  { path: 'fintech-future-wealth-management', component: FintechFutureWealthManagementBlogComponent},
  { path: 'spatial-computing-app-development-apple-vision-pro', component: AppleVisionProAppDevelopmentBlogComponent},
  { path: 'big-data-analytics-help-asset-management-better-investment-decisions', component: BigDataAnalyticsBlogComponent},
  { path: 'machine-learning-benefit-order-management', component: MachineLearningBenefitOrderManagementBlogComponent},
  { path: 'impact-artificial-intelligence-machine-learning-investment-banking', component: ImpactArtificialIntelligenceBlogComponent},
  { path: 'changing-landscape-investment-banking-fintech', component: ChangingLandscapeInvestmentBankingFintechBlogComponent},
  { path: 'future-technology-hold-order-management-systems', component: OrderManagementBlogComponent},
  { path: 'machine-learning-for-asset-management-ensures-low-risk', component:MachineLearningForAssetManagementEnsuresLowRiskBlogComponent},
  { path: 'generative-ai-driving-change-financial-services', component:GenerativeAiDrivingChangeFinancialServicesBlogComponent},
  { path: 'generative-artificial-intelligence-future-banking-industry', component:GenerativeAiFutureBankingIndustryBlogComponent},
  { path: 'smart-contracts-revolutionary-role-supply-chain-management', component:SmartContractsRevolutionaryRoleSupplyChainManagementBlogComponent},
  { path: 'supply-chain-agility-ever-evolving-world', component:SupplyChainAgilityEverEvolvingWorldBlogComponent},
  { path: 'top-ten-supply-chain-management-trends', component:TopTenSupplyChainManagementTrendsBlogComponent},

  { path: 'case-studies', component: CasestudyComponent },
  { path: 'parking-app-case-study', component: ParkCaseStudiesComponent },
  { path: 'vacation-rental-platform-case-study-holiday-keepers', component: HolidayKeepersCaseStudiesComponent},
  { path: 'death-record-management-case-study-notifynow', component: PcaNotifyNowCaseStudiesComponent},
  { path: 'decedent-check-case-study-adc', component: AdcDecedentCheckCaseStudiesComponent},
  // { path: 'firstblastit-case-study', component: FirstblastitCaseStudyComponent},
  // { path: 'fabvenues-case-study', component: FabvenuesCaseStudyComponent},
  // { path: 'firsttrackit-case-study', component: FirsttrackitCaseStudyComponent},
  // { path: 'layeronex-case-study', component: LayeronexCaseStudyComponent},
  // { path: 'deeplens-case-study', component: DeepLensCaseStudyComponent},
  // { path: 'farmsent-case-study', component: FarmsentCaseStudyComponent},

  { path: 'portfolio', component: PortfolioComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'cookies-policy', component: CookiesPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  // { path: 'lets-talk', component: LetsTalkComponent },
  // { path: 'podcasts', component: PodcastsComponent },
  // { path: 'transgenie-old', component: DeliveryDispatchSolutionComponent },
  { path: 'transgenie', component: TransgenieComponent },
  // { path: 'contact-form', component: ContactFormComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
