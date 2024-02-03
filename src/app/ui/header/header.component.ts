import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  showMenu: boolean = false;
  @ViewChild('menuIcon') menuIcon!: ElementRef;
  @HostListener('document:click', ['$event']) outClickMenu(event: Event) {
    if (
      !this.menuIcon.nativeElement.contains(event.target) &&
      this.showMenu === true
    ) {
      this.showMenu = false;
      HeaderService.toggleMenu.emit();
    }
  }
  constructor(private _headerService: HeaderService) {}
  toggleMenu() {
    HeaderService.toggleMenu.emit();
    this.showMenu = !this.showMenu;
  }
}
