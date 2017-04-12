import 'core-js';
import 'zone.js/dist/zone';
import 'ng2-facebook-sdk';
import {NgModule}                   from '@angular/core';
import {BrowserModule}              from '@angular/platform-browser';
import {platformBrowserDynamic}     from '@angular/platform-browser-dynamic';
import {AppRoutingModule}           from  './routes';
import {FormsModule}                from '@angular/forms';
import {HttpModule, JsonpModule}    from '@angular/http';
import {AppComponent}               from './app.component';
import {NavBarComponent}            from './shared/navbar.component';
import {FooterComponent}            from './shared/footer.component';
import {EllipsisPipe}               from './ellipsis.pipe';
import {enableProdMode}             from '@angular/core';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    JsonpModule,
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    // HomeComponent,
    // TermsOfServiceComponent,
    // PrivacyPolicyComponent,
    // ContactUsComponent,
    // PageNotFoundComponent,
    // LoginComponent,
    // RegComponent,
    // FacebookComponent,
    // LinkedinComponent,
    // TwitterComponent,
    // ContentComponent,
    // MarketplaceComponent,
    EllipsisPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
