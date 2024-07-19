import { Component, ChangeDetectionStrategy } from '@angular/core';
import {LoginComponent} from "../../components/login/login.component";


@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    LoginComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {

}
