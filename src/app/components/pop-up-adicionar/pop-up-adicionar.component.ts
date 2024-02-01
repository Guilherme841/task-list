import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { HeaderService } from '../../services/header-service/header.service';

@Component({
  selector: 'app-pop-up-adicionar',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-adicionar.component.html',
  styleUrl: './pop-up-adicionar.component.scss',
})
export class PopUpAdicionarComponent implements OnInit {
  booleanPopUp: boolean = false;
  @ViewChild('popUp') popUp!: ElementRef;
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _headerService: HeaderService
  ) {}
  @HostListener('document:click', ['$event'])
  clickForaDoPopUp(event: Event) {
    if (this.popUp && !this.popUp.nativeElement.contains(event.target)) {
      if (this.booleanPopUp) {
        this.booleanPopUp = false;
      }
    }
  }
  ngOnInit(): void {
    HeaderService.togglePopUp.subscribe(() => {
      this.booleanPopUp = !this.booleanPopUp;
    });
  }
}
