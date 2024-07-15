import {Routes} from '@angular/router';
import {NotFoundPageComponent} from "./core/pages/not-found-page/not-found-page.component";
import {LoginPageComponent} from "./core/pages/login-page/login-page.component";

export const routes: Routes = [
  {
    path: '',
    title: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    title: '404',
    component: NotFoundPageComponent
  },
];
