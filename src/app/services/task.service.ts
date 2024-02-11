import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  static addTask: EventEmitter<object> = new EventEmitter();
  // static delTask: EventEmitter<any> = new EventEmitter();
  constructor() {}
}
