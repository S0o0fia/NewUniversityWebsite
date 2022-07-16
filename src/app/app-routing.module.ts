import { MacGoalsComponent } from './pages/meauremrntAssementCenter/mac-goals/mac-goals.component';
import { MacInftoComponent } from './pages/meauremrntAssementCenter/mac-infto/mac-infto.component';
import { MeasurementandAssmentsCenterComponent } from './components/universityCentersUnits/measurementand-assments-center/measurementand-assments-center.component';
import { AbstractComponent } from './pages/abstract/abstract/abstract.component';
import { AlsunCodesComponent } from './components/StudentResult/alsun-codes/alsun-codes.component';
import { ToursimCodesComponent } from './components/StudentResult/toursim-codes/toursim-codes.component';
import { FineartCodesComponent } from './components/StudentResult/fineart-codes/fineart-codes.component';
import { ArchologyCodesComponent } from './components/StudentResult/archology-codes/archology-codes.component';
import { StudentsResultComponent } from './components/StudentResult/students-result/students-result.component';
import { StudentAffairTasksComponent } from './pages/student-affair-tasks/student-affair-tasks.component';
import { StudentsAffairMessageComponent } from './pages/students-affair-message/students-affair-message.component';
import { StudentAffairManagerWordComponent } from './pages/student-affair-manager-word/student-affair-manager-word.component';
import { StudentAffairInfoComponent } from './pages/student-affair-info/student-affair-info.component';
import { GuesthouseComponent } from './components/guesthouse/guesthouse.component';
import { InternationalCooperationExternalRelationsComponent } from './components/international-cooperation-external-relations/international-cooperation-external-relations.component';
import { CalenderCenterComponent } from './components/calender-center/calender-center.component';
import { FLDPComponent } from './components/fldp/fldp.component';
import { AboutPhdComponent } from './components/universityDepartments/gradutes-departments/about-phd/about-phd.component';
import { AboutMasterComponent } from './components/universityDepartments/gradutes-departments/about-master/about-master.component';
import { AboutDiplomaComponent } from './components/universityDepartments/gradutes-departments/about-diploma/about-diploma.component';
import { GraduteStudyManagerWordComponent } from './pages/gradute-study-manager-word/gradute-study-manager-word.component';
import { GraduationStudyNewsComponent } from './pages/graduation-study-news/graduation-study-news.component';
import { GraduationStudyNewDetailsComponent } from './pages/graduation-study-new-details/graduation-study-new-details.component';
import { GradutesAffairsComponent } from './components/universityDepartments/gradutes-affairs/gradutes-affairs.component';
import { StudentsAffairsComponent } from './components/universityDepartments/students-affairs/students-affairs.component';
import { UniversityHistoryComponent } from './components/aboutUniversity/university-history/university-history.component';
import { UniversityVisionMessageComponent } from './components/aboutUniversity/university-vision-message/university-vision-message.component';
import { PresidentWordComponent } from './components/aboutUniversity/president-word/president-word.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeUniversityComponent } from './home-university/home-university.component';
import { HomeKindergartenComponent } from './home-kindergarten/home-kindergarten.component';
import { HomeCollegeComponent } from './home-college/home-college.component';
import { HomeCoachingComponent } from './home-coaching/home-coaching.component';
import { HomeSchoolComponent } from './home-school/home-school.component';
import { HomeOnlineCourseComponent } from './home-online-course/home-online-course.component';
import { HomeLanguageSchoolComponent } from './home-language-school/home-language-school.component';
import { HomeKidsSchoolComponent } from './home-kids-school/home-kids-school.component';
import { HeaderStyle1Component } from './features/header-style1/header-style1.component';
import { HeaderStyle2Component } from './features/header-style2/header-style2.component';
import { HeaderStyle3Component } from './features/header-style3/header-style3.component';
import { HeaderStyle4Component } from './features/header-style4/header-style4.component';
import { HeaderStyle5Component } from './features/header-style5/header-style5.component';
import { HeaderStyle6Component } from './features/header-style6/header-style6.component';
import { HeaderStyleDark1Component } from './features/header-style-dark1/header-style-dark1.component';
import { HeaderStyleDark2Component } from './features/header-style-dark2/header-style-dark2.component';
import { HeaderStyleDark3Component } from './features/header-style-dark3/header-style-dark3.component';
import { HeaderStyleDark4Component } from './features/header-style-dark4/header-style-dark4.component';
import { HeaderStyleDark5Component } from './features/header-style-dark5/header-style-dark5.component';
import { HeaderStyleDark6Component } from './features/header-style-dark6/header-style-dark6.component';
import { FooterStyle1Component } from './features/footer-style1/footer-style1.component';
import { FooterStyle2Component } from './features/footer-style2/footer-style2.component';
import { FooterStyle3Component } from './features/footer-style3/footer-style3.component';
import { FooterStyle4Component } from './features/footer-style4/footer-style4.component';
import { FooterStyle5Component } from './features/footer-style5/footer-style5.component';
import { FooterStyle6Component } from './features/footer-style6/footer-style6.component';
import { FooterStyle7Component } from './features/footer-style7/footer-style7.component';
import { FooterStyle8Component } from './features/footer-style8/footer-style8.component';
import { FooterStyle9Component } from './features/footer-style9/footer-style9.component';
import { FooterStyle10Component } from './features/footer-style10/footer-style10.component';
import { FooterStyle11Component } from './features/footer-style11/footer-style11.component';
import { FooterStyle12Component } from './features/footer-style12/footer-style12.component';

import { AboutUs1Component } from './pages/about-us1/about-us1.component';
import { AboutUs2Component } from './pages/about-us2/about-us2.component';
import { Services1Component } from './pages/services1/services1.component';
import { Services2Component } from './pages/services2/services2.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { TeachersProfileComponent } from './pages/teachers-profile/teachers-profile.component';
import { CourcesComponent } from './pages/cources/cources.component';
import { CourcesDetailsComponent } from './pages/cources-details/cources-details.component';
import { EventsComponent } from './pages/events/events.component';
import { EventsDetailsComponent } from './pages/events-details/events-details.component';
import { HelpDeskComponent } from './pages/help-desk/help-desk.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error405Component } from './pages/error405/error405.component';
import { GalleryGrid2Component } from './pages/gallery-grid2/gallery-grid2.component';
import { GalleryGrid3Component } from './pages/gallery-grid3/gallery-grid3.component';
import { GalleryGrid4Component } from './pages/gallery-grid4/gallery-grid4.component';

import { ShopComponent } from './shop/shop/shop.component';
import { ShopSidebarComponent } from './shop/shop-sidebar/shop-sidebar.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { CartComponent } from './shop/cart/cart.component';
import { WishlistComponent } from './shop/wishlist/wishlist.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { LoginComponent } from './shop/login/login.component';
import { RegisterComponent } from './shop/register/register.component';

import { HalfImageComponent } from './blog/half-image/half-image.component';
import { HalfImageSidebarComponent } from './blog/half-image-sidebar/half-image-sidebar.component';
import { HalfImageSidebarLeftComponent } from './blog/half-image-sidebar-left/half-image-sidebar-left.component';
import { LargeImageComponent } from './blog/large-image/large-image.component';
import { LargeImageSidebarComponent } from './blog/large-image-sidebar/large-image-sidebar.component';
import { LargeImageSidebarLeftComponent } from './blog/large-image-sidebar-left/large-image-sidebar-left.component';
import { Grid2Component } from './blog/grid2/grid2.component';
import { Grid2SidebarComponent } from './blog/grid2-sidebar/grid2-sidebar.component';
import { Grid2SidebarLeftComponent } from './blog/grid2-sidebar-left/grid2-sidebar-left.component';
import { Grid3Component } from './blog/grid3/grid3.component';
import { Grid3SidebarComponent } from './blog/grid3-sidebar/grid3-sidebar.component';
import { Grid3SidebarLeftComponent } from './blog/grid3-sidebar-left/grid3-sidebar-left.component';
import { Grid4Component } from './blog/grid4/grid4.component';
import { SingleComponent } from './blog/single/single.component';
import { SingleSidebarComponent } from './blog/single-sidebar/single-sidebar.component';
import { SingleSidebarLeftComponent } from './blog/single-sidebar-left/single-sidebar-left.component';

import { ContactUs1Component } from './pages/contact-us1/contact-us1.component';
import { ContactUs2Component } from './pages/contact-us2/contact-us2.component';
import { ContactUs3Component } from './pages/contact-us3/contact-us3.component';
import { ContactUs4Component } from './pages/contact-us4/contact-us4.component';
import { UniversityGoalsComponent } from './components/aboutUniversity/university-goals/university-goals.component';
import { GraduteAffiarIntroComponent } from './pages/gradute-affiar-intro/gradute-affiar-intro.component';
import { StudentsAffairNewDetailsComponent } from './pages/students-affair-new-details/students-affair-new-details.component';
import { StudentsAffairNewsComponent } from './pages/students-affair-news/students-affair-news.component';
import { StudentsAffairGoalsComponent } from './pages/students-affair-goals/students-affair-goals.component';
import { ConferenceComponent } from './components/conference/conference/conference.component';
import { LocalConfrenceComponent } from './pages/local-confrence/local-confrence/local-confrence.component';
import { InternationalConfrenceComponent } from './pages/international-confrence/international-confrence/international-confrence.component';


const routes: Routes = [
	{path: 'index-2', component: HomeKindergartenComponent},
	{path: 'home-kindergarten', component: HomeKindergartenComponent},
	{path: 'index-3', component: HomeCollegeComponent},
	{path: 'home-college', component: HomeCollegeComponent},
	{path: 'index-4', component: HomeCoachingComponent},
	{path: 'home-coaching', component: HomeCoachingComponent},
	{path: 'index-5', component: HomeSchoolComponent},
	{path: 'home-school', component: HomeSchoolComponent},
	{path: 'index-6', component: HomeOnlineCourseComponent},
	{path: 'home-online-course', component: HomeOnlineCourseComponent},
	{path: 'index-7', component: HomeLanguageSchoolComponent},
	{path: 'home-language-school', component: HomeLanguageSchoolComponent},
	{path: 'index-8', component: HomeKidsSchoolComponent},
	{path: 'home-kids-school', component: HomeKidsSchoolComponent},
	{path: 'header-style-1', component: HeaderStyle1Component},
	{path: 'header-style-2', component: HeaderStyle2Component},
	{path: 'header-style-3', component: HeaderStyle3Component},
	{path: 'header-style-4', component: HeaderStyle4Component},
	{path: 'header-style-5', component: HeaderStyle5Component},
	{path: 'header-style-6', component: HeaderStyle6Component},
	{path: 'header-style-dark-1', component: HeaderStyleDark1Component},
	{path: 'header-style-dark-2', component: HeaderStyleDark2Component},
	{path: 'header-style-dark-3', component: HeaderStyleDark3Component},
	{path: 'header-style-dark-4', component: HeaderStyleDark4Component},
	{path: 'header-style-dark-5', component: HeaderStyleDark5Component},
	{path: 'header-style-dark-6', component: HeaderStyleDark6Component},
	{path: 'footer-1', component: FooterStyle1Component},
	{path: 'footer-2', component: FooterStyle2Component},
	{path: 'footer-3', component: FooterStyle3Component},
	{path: 'footer-4', component: FooterStyle4Component},
	{path: 'footer-5', component: FooterStyle5Component},
	{path: 'footer-6', component: FooterStyle6Component},
	{path: 'footer-7', component: FooterStyle7Component},
	{path: 'footer-8', component: FooterStyle8Component},
	{path: 'footer-9', component: FooterStyle9Component},
	{path: 'footer-10', component: FooterStyle10Component},
	{path: 'footer-11', component: FooterStyle11Component},
	{path: 'footer-12', component: FooterStyle12Component},

	{path: 'about-1', component: AboutUs1Component},
	{path: 'about-2', component: AboutUs2Component},
	{path: 'about-2', component: AboutUs2Component},
	{path: 'services-1', component: Services1Component},
	{path: 'services-2', component: Services2Component},
	{path: 'faq-1', component: FaqsComponent},
	{path: 'teacher', component: TeachersComponent},
	{path: 'teachers-profile', component: TeachersProfileComponent},
	{path: 'courses', component: CourcesComponent},
	{path: 'courses-details', component: CourcesDetailsComponent},

	{path: 'help-desk', component: HelpDeskComponent},
  {path: 'error-405', component: Error405Component},
	{path: 'gallery-grid-2', component: GalleryGrid2Component},
	{path: 'gallery-grid-3', component: GalleryGrid3Component},
	{path: 'gallery-grid-4', component: GalleryGrid4Component},
	{path: 'shop', component: ShopComponent},
	{path: 'shop-sidebar', component: ShopSidebarComponent},
	{path: 'shop-product-details', component: ProductDetailsComponent},
	{path: 'shop-cart', component: CartComponent},
	{path: 'shop-wishlist', component: WishlistComponent},
	{path: 'shop-checkout', component: CheckoutComponent},
	{path: 'shop-login', component: LoginComponent},
	{path: 'shop-register', component: RegisterComponent},

	{path: 'blog-half-img', component: HalfImageComponent},
	{path: 'blog-half-img-sidebar', component: HalfImageSidebarComponent},
	{path: 'blog-half-img-left-sidebar', component: HalfImageSidebarLeftComponent},
	{path: 'blog-large-img', component: LargeImageComponent},
	{path: 'blog-large-img-sidebar', component: LargeImageSidebarComponent},
	{path: 'blog-large-img-left-sidebar', component: LargeImageSidebarLeftComponent},
	{path: 'blog-grid-2', component: Grid2Component},
	{path: 'blog-grid-2-sidebar', component: Grid2SidebarComponent},
	{path: 'blog-grid-2-sidebar-left', component: Grid2SidebarLeftComponent},
	{path: 'blog-grid-3', component: Grid3Component},
	{path: 'blog-grid-3-sidebar', component: Grid3SidebarComponent},
	{path: 'blog-grid-3-sidebar-left', component: Grid3SidebarLeftComponent},
	{path: 'blog-grid-4', component: Grid4Component},
	{path: 'blog-single', component: SingleComponent},
	{path: 'blog-single-sidebar', component: SingleSidebarComponent},
	{path: 'blog-single-left-sidebar', component: SingleSidebarLeftComponent},
	{path: 'contact-1', component: ContactUs1Component},
	{path: 'contact-2', component: ContactUs2Component},
	{path: 'contact-3', component: ContactUs3Component},
	{path: 'contact-4', component: ContactUs4Component},


  //Active routing link
  {path: '', component: HomeUniversityComponent},
	{path: 'index', component: HomeUniversityComponent},
	{path: 'home-university', component: HomeUniversityComponent},
  {path: 'event', component: EventsComponent},
	{path: 'event-details/:id', component: EventsDetailsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
	{path: 'error-404', component: Error404Component},
  {path:'fldp' , component:FLDPComponent },
  {path:'CMC' , component:CalenderCenterComponent},
  {path:'guesthouse' , component:GuesthouseComponent},
  {path:'InternationalCooperationExternalRelations' , component:InternationalCooperationExternalRelationsComponent},
  {path :'presidentword' , component : PresidentWordComponent},
  {path :'university-goals' , component : UniversityGoalsComponent},
  {path :'university-vision-message' , component : UniversityVisionMessageComponent},
  {path : 'unversity-conferences' , component : ConferenceComponent},
  {path: 'local-confrence', component: LocalConfrenceComponent},
	{path: 'international-confrence', component: InternationalConfrenceComponent},
	{path: 'abstract', component: AbstractComponent},
  {path :'university-history' , component :UniversityHistoryComponent},
  {path :'students-affairs' , component :StudentsAffairsComponent},
  {path : 'gradute-affairs' , component:GradutesAffairsComponent},
  {path : 'gradute-study-news' , component:GraduationStudyNewsComponent},
  {path : 'gradute-study-intro' , component:GraduteAffiarIntroComponent},
  {path : 'gradute-study-manager-word' , component:GraduteStudyManagerWordComponent},
  {path : 'gradute-study-news-details/:id' , component:GraduationStudyNewDetailsComponent},
  {path : 'about-diploma' , component:AboutDiplomaComponent},
  {path : 'about-master' , component:AboutMasterComponent},
  {path : 'about-phd' , component:AboutPhdComponent},
  {path : 'student-affair-new-details' , component : StudentsAffairNewDetailsComponent} ,
  {path: 'student-affair-news' , component:StudentsAffairNewsComponent},
  {path:'student-affair-info' , component : StudentAffairInfoComponent},
  {path: 'student-affair-manager-word' , component:StudentAffairManagerWordComponent},
  {path : 'student-affair-message', component:StudentsAffairMessageComponent},
  {path : 'student-affair-goals' , component:StudentsAffairGoalsComponent},
  {path : 'student-affair-tasks' , component : StudentAffairTasksComponent},
  {path: 'students-result' , component : StudentsResultComponent},
  {path: 'arcology-codes' , component:ArchologyCodesComponent },
  {path : 'fineart-code' , component:FineartCodesComponent},
  {path: 'toursim-code' , component:ToursimCodesComponent},
  {path : 'alsun-codes' , component:AlsunCodesComponent },
  {path : 'mac' , component:MeasurementandAssmentsCenterComponent },
  {path : 'mac-intro' , component:MacInftoComponent},
  {path : 'mac-goals' , component:MacGoalsComponent},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
