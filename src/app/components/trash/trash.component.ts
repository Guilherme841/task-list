import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-trash',
  standalone: true,
  imports: [],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss',
})
export class TrashComponent implements OnInit {
  constructor(private _taskService: TaskService) {}
  ngOnInit() {
  }
}
