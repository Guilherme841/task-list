import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { PopUpAdicionarComponent } from '../../components/pop-up-adicionar/pop-up-adicionar.component';
import { HeaderService } from '../../services/header-service/header.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SideBarComponent, PopUpAdicionarComponent],
  providers: [HeaderService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  @ViewChild('btnAdd', { static: false }) btnAdd!: ElementRef;
  constructor(private _headerService: HeaderService) {}
  callTogglePopUp() {
    HeaderService.togglePopUp.emit(this.btnAdd);
  }
  ngOnInit(): void {}
}
