import {Routes} from '@angular/router';
import {NotFoundPageComponent} from "./core/pages/not-found-page/not-found-page.component";
import {LoginPageComponent} from "./core/pages/login-page/login-page.component";
import {LayoutComponent} from "./core/components/layout/layout.component";
import {SignupPageComponent} from "./core/pages/signup-page/signup-page.component";
import {VerificationPageComponent} from "./core/pages/verification-page/verification-page.component";

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
       {path: '', title: 'login', component: LoginPageComponent},
       {path: 'signup', title: 'login', component: SignupPageComponent},
       {path: 'verification', title: 'login', component: VerificationPageComponent}
    ]
  },
  {
    path: '**',
    title: '404',
    component: NotFoundPageComponent
  },
];
