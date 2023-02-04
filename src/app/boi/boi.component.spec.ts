import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiComponent } from './boi.component';

describe('BoiComponent', () => {
  let component: BoiComponent;
  let fixture: ComponentFixture<BoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
