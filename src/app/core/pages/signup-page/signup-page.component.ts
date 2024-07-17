import { Component } from '@angular/core';
import {LoginButtonComponent} from "../../components/login-button/login-button.component";

@Component({
  selector: 'signup-page',
  standalone: true,
  imports: [
    LoginButtonComponent
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {

}
