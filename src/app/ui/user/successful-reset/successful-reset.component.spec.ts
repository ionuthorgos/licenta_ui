import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulResetComponent } from './successful-reset.component';

describe('SuccessfulResetComponent', () => {
  let component: SuccessfulResetComponent;
  let fixture: ComponentFixture<SuccessfulResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
