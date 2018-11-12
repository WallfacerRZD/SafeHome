import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingItemComponent } from './routing-item.component';

describe('RoutingItemComponent', () => {
  let component: RoutingItemComponent;
  let fixture: ComponentFixture<RoutingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
