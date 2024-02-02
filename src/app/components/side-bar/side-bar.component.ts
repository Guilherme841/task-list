import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from '../../services/header-service/header.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  providers: [HeaderService],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit {
  booleanMenu: boolean = false;
  constructor(private _headerService: HeaderService) {}
  @ViewChild('btnAdd') btnAdd!: ElementRef;
  ngOnInit(): void {
    HeaderService.toggleMenu.subscribe(() => {
      this.booleanMenu = !this.booleanMenu;
    });
  }
  callTogglePopUp() {
    HeaderService.togglePopUp.emit(this.btnAdd);
  }
}
