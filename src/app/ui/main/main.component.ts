import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { PopUpAdicionarComponent } from '../../components/pop-up-adicionar/pop-up-adicionar.component';
import { HeaderService } from '../../services/header-service/header.service';
import { ContainerTaskComponent } from '../../components/container-task/container-task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SideBarComponent,
    PopUpAdicionarComponent,
    ContainerTaskComponent,
    CommonModule,
  ],
  providers: [HeaderService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  taskName: string = 'Aqui vai o Nome da Tarefa!';
  newTask: ContainerTaskComponent[] = [];
  @ViewChild('btnAdd', { static: false }) btnAdd!: ElementRef;
  constructor(private _headerService: HeaderService) {}
  callTogglePopUp() {
    HeaderService.togglePopUp.emit(this.btnAdd);
  }
  addTask() {
    this.newTask.push(new ContainerTaskComponent());
  }
  ngOnInit(): void {}
}
