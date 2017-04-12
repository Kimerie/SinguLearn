import {Component}                    from '@angular/core';
import {Routes, RouterLink, Router}   from '@angular/router';
import {NavBarComponent}              from './shared/navbar.component';
import {FooterComponent}              from './shared/footer.component';
import {TeacherDashboardComponent}    from './teacher/teacherdashboard/teacherdashboard.component';
// import {HomeComponent}                from './homepage/hompage.component';
// import {MarketplaceComponent}         from './marketplace/marketplace.component';
// import {ContentComponent}             from './content/content.component';
// import {PageNotFoundComponent}        from './pagenotfound/pagenotfound.component';
// import {PrivacyPolicyComponent}       from './privacypolicy/privacy.component';
// import {TermsOfServiceComponent}      from './termsofservice/terms.component';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {}
