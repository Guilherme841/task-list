import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../../services/header-service/header.service';

interface Task {
  name: string;
  desc: string;
}

@Component({
  selector: 'app-container-task',
  standalone: true,
  imports: [CommonModule],
  providers: [TaskService, HeaderService],
  templateUrl: './container-task.component.html',
  styleUrl: './container-task.component.scss',
})
export class ContainerTaskComponent implements OnInit {
  @ViewChild('btnAdd', { static: false }) btnAdd!: ElementRef;
  @ViewChild('containerTask', { static: false }) containerTask!: ElementRef;
  constructor(
    private _taskService: TaskService,
    private _headerService: HeaderService,
    private _elementRef: ElementRef
  ) {}
  nameTask: string = '';
  descTask: string = '';
  arrTask: Task[] = [
    {
      name: '',
      desc: '',
    },
  ];
  ngOnInit(): void {
    TaskService.addTask.subscribe((task: any) => {
      this.arrTask.push(task);
      this.nameTask = task.name;
      this.descTask = task.desc;
    });
  }
  callTogglePopUp() {
    HeaderService.togglePopUp.emit(this.btnAdd);
  }
  deleteTask(event: any) {
    event.target.closest('.container-task').remove();
  }
}
