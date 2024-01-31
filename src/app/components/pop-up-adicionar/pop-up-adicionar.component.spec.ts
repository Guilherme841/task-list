import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAdicionarComponent } from './pop-up-adicionar.component';

describe('PopUpAdicionarComponent', () => {
  let component: PopUpAdicionarComponent;
  let fixture: ComponentFixture<PopUpAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
