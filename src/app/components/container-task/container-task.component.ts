import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container-task',
  standalone: true,
  imports: [],
  providers: [TaskService, CommonModule],
  templateUrl: './container-task.component.html',
  styleUrl: './container-task.component.scss',
})
export class ContainerTaskComponent implements OnInit {
  constructor(private _taskService: TaskService) {}
  ngOnInit(): void {
    TaskService.addTask.subscribe((task: any) => {
      console.log(task.name, task.desc);
    });
  }
}
