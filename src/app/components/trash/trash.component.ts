import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trash',
  standalone: true,
  imports: [],
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss',
})
export class TrashComponent implements OnInit {
  elementRef!: ElementRef;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _elementRef: ElementRef
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe((params) => {
      const elementRef = params['elementRef'];
      // Acesse outros dados relevantes
      this.elementRef = new ElementRef(elementRef);
    });
  }
}
