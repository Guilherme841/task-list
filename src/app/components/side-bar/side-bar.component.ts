import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from '../../services/header-service/header.service';
import { Router } from '@angular/router';

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
  constructor(private _headerService: HeaderService, private _router: Router) {}
  @ViewChild('btnAdd') btnAdd!: ElementRef;
  ngOnInit(): void {
    HeaderService.toggleMenu.subscribe(() => {
      this.booleanMenu = !this.booleanMenu;
    });
  }
  callTogglePopUp() {
    this._router.navigate(['']);
    HeaderService.togglePopUp.emit(this.btnAdd);
  }
  callTrash() {
    this._router.navigate(['/trash']);
  }
}
