import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWithServiceComponent } from './counter-with-service.component';

describe('CounterWithServiceComponent', () => {
  let component: CounterWithServiceComponent;
  let fixture: ComponentFixture<CounterWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
