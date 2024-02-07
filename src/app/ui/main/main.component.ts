import { Component, OnInit } from '@angular/core';

import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { PopUpAdicionarComponent } from '../../components/pop-up-adicionar/pop-up-adicionar.component';
import { ContainerTaskComponent } from '../../components/container-task/container-task.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SideBarComponent, PopUpAdicionarComponent, ContainerTaskComponent],
  providers: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  ngOnInit(): void {}
}
