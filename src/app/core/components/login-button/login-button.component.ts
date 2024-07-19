import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'login-button',
  standalone: true,
  imports: [],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginButtonComponent {

}
