import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderViewComponent } from './list-order-view.component';

describe('ListOrderViewComponent', () => {
  let component: ListOrderViewComponent;
  let fixture: ComponentFixture<ListOrderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
