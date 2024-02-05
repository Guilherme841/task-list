import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from '../../services/header-service/header.service';
import { BoxTaskComponent } from '../box-task/box-task.component';

@Component({
  selector: 'app-container-task',
  standalone: true,
  imports: [BoxTaskComponent],
  providers: [HeaderService],
  templateUrl: './container-task.component.html',
  styleUrl: './container-task.component.scss',
})
export class ContainerTaskComponent implements OnInit {
  taskName: string = 'Aqui vai o Nome da Tarefa!';
  descTask: string = 'Aqui vai a Descrição da Tarefa!';
  @ViewChild('btnAdd', { static: false }) btnAdd!: ElementRef;
  constructor(private _headerService: HeaderService) {}
  callTogglePopUp() {
    HeaderService.togglePopUp.emit(this.btnAdd);
  }
  ngOnInit(): void {}
}
