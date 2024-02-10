import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { PopUpAdicionarComponent } from '../../components/pop-up-adicionar/pop-up-adicionar.component';
import { RouterOutlet } from '@angular/router';
import { PageBarComponent } from '../../components/page-bar/page-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    SideBarComponent,
    PopUpAdicionarComponent,
    RouterOutlet,
    PageBarComponent,
    NgxPaginationModule
  ],
  providers: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  ngOnInit(): void {}
  dados = ['teste1', 'teste2', 'teste3', 'teste4'] // Seus dados aqui

  p: number = 1;
  itemsPerPage: number = 3;
}
