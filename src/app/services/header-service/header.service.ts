import { ElementRef, EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  static toggleMenu: EventEmitter<boolean> = new EventEmitter();
  static togglePopUp: EventEmitter<ElementRef> = new EventEmitter();
  constructor() {}
}
