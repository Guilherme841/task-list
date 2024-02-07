import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

interface Task {
  name: string;
  desc: string;
}

@Component({
  selector: 'app-container-task',
  standalone: true,
  imports: [CommonModule],
  providers: [TaskService],
  templateUrl: './container-task.component.html',
  styleUrl: './container-task.component.scss',
})
export class ContainerTaskComponent implements OnInit {
  constructor(private _taskService: TaskService) {}
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
  addElement() {}
}
