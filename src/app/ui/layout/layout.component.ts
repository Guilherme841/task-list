import { Component } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/MainComponent';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
