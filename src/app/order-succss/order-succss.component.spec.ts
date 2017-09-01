import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccssComponent } from './order-succss.component';

describe('OrderSuccssComponent', () => {
  let component: OrderSuccssComponent;
  let fixture: ComponentFixture<OrderSuccssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSuccssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSuccssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
