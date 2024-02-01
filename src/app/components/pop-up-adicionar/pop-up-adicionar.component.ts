import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-pop-up-adicionar',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-adicionar.component.html',
  styleUrl: './pop-up-adicionar.component.scss',
})
export class PopUpAdicionarComponent {
  booleanPopUp: boolean = true;
  @ViewChild('popUp') popUp!: ElementRef;
  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}
  @HostListener('document:click', ['$event'])
  clickForaDoPopUp(event: Event) {
    if (!this.popUp.nativeElement.contains(event.target)) {
      this._renderer.setStyle(this.popUp.nativeElement, 'display', 'none');
    }
  }
}
