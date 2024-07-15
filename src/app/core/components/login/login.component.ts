import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LoginButtonComponent} from "../login-button/login-button.component";

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    LoginButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

}
