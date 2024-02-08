import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { HeaderService } from '../../services/header-service/header.service';
import { NgxPaginationModule } from 'ngx-pagination';

interface Task {
  name: string;
  desc: string;
}

@Component({
  selector: 'app-container-task',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
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

  p: number = 1;
  itemsPerPage: number = 3;

  nameTask: string = '';
  descTask: string = '';
  arrTask: Task[] = [
    {
      name: '',
      desc: '',
    },
  ];
  ngOnInit(): void {
    this.arrTask.shift();
    TaskService.addTask.subscribe((task: any) => {
      this.arrTask.push(task);
      this.nameTask = task.name;
      this.descTask = task.desc;
    });
  }
  callTogglePopUp() {
    HeaderService.togglePopUp.emit(this.btnAdd);
  }
  deleteTask(event: any, name: any, desc: any) {
    const findObjDel = this.arrTask.find(
      (arrTask) => arrTask.name === name && arrTask.desc === desc
    );
    const findObjDelTask = findObjDel as Task;
    const iFindObjDel = this.arrTask.indexOf(findObjDelTask);
    this.arrTask.splice(iFindObjDel, 1);
    console.log(this.arrTask);
    event.target.closest('.container-task').remove();
  }
  boolEditTask: boolean = false;
  editTask() {
    this.boolEditTask = !this.boolEditTask;
  }
  boolDone: boolean = false;
  doneTask() {
    this.boolDone = !this.boolDone;
  }
}
