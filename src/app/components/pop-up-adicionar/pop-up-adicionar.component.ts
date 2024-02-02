import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { HeaderService } from '../../services/header-service/header.service';

const fadeInOut = [
  trigger('fadeInOut', [
    state(
      'void',
      style({
        scale: 0,
      })
    ),
    transition('void <=> *', animate('120ms ease-in-out')),
  ]),
];

@Component({
  selector: 'app-pop-up-adicionar',
  standalone: true,
  imports: [],
  animations: [fadeInOut],
  templateUrl: './pop-up-adicionar.component.html',
  styleUrl: './pop-up-adicionar.component.scss',
})
export class PopUpAdicionarComponent implements OnInit {
  booleanPopUp: boolean = false;
  btnAdd!: any;
  @ViewChild('popUp', { static: false }) popUp!: ElementRef;
  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _headerService: HeaderService
  ) {}
  @HostListener('document:click', ['$event'])
  clickForaDoPopUp(event: Event) {
    if (this.popUp && !this.popUp.nativeElement.contains(event.target)) {
      if (this.popUp && !this.btnAdd.nativeElement.contains(event.target)) {
        this.booleanPopUp = false;
      }
    }
  }
  ngOnInit(): void {
    HeaderService.togglePopUp.subscribe((btnAdd) => {
      this.btnAdd = btnAdd;
      this.booleanPopUp = !this.booleanPopUp;
    });
  }
}
