import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  logoSrc = '/assets/imgs/header/logo_header.svg';
  localizationSrc = '/assets/imgs/header/localisation.svg';
}
