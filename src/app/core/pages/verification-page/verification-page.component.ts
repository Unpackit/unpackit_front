import {ChangeDetectionStrategy, Component} from '@angular/core';
import {VerificationComponent} from "../../components/verification/verification.component";

@Component({
  selector: 'verification-page',
  standalone: true,
  imports: [
    VerificationComponent
  ],
  templateUrl: './verification-page.component.html',
  styleUrl: './verification-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerificationPageComponent {

}
