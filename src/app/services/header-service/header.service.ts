import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  static toggleMenu: EventEmitter<boolean> = new EventEmitter()
  constructor() {}
}
