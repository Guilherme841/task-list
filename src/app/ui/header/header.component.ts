import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header-service/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  providers: [HeaderService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private _headerService: HeaderService) {}
  toggleMenu() {
    HeaderService.toggleMenu.emit();
  }
}
