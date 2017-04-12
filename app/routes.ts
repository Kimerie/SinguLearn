import {NgModule}                 from '@angular/core';
import {RouterModule, Routes}     from '@angular/router';
// import {AppComponent}             from './app.component';
// import {HomeComponent}            from './homepage/hompage.component';
// import {LoginComponent}           from './login/login.component';
// import {ContentComponent}         from './content/content.component';
// import {MarketplaceComponent}     from './marketplace/marketplace.component';
// import {ContactUsComponent}       from './contactus/contactus.component';
// import {PrivacyPolicyComponent}   from './privacypolicy/privacy.component';
// import {TermsOfServiceComponent}  from './termsofservice/terms.component';
// import {PageNotFoundComponent}    from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path:'home', component: HomeComponent},
  // {path: 'content', component: ContentComponent},
  // {path: 'market', component: MarketplaceComponent},
  // {path: 'privacy', component: PrivacyPolicyComponent},
  // {path: 'terms', component: TermsOfServiceComponent},
  // {path: 'contact', component: ContactUsComponent},
  // {path: '**', component: PageNotFoundComponent},
  //TODO (Kimerie): add sign-in and registration routes after components implemented
  // {path: '/register', component: RegComponent}
  // {path: '*', component: LoginComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
