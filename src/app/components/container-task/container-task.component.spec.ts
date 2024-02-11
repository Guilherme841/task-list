import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTaskComponent } from './container-task.component';

describe('ContainerTaskComponent', () => {
  let component: ContainerTaskComponent;
  let fixture: ComponentFixture<ContainerTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerTaskComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ContainerTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
