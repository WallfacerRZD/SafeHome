import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsMessageComponent } from './tips-message.component';

describe('TipsMessageComponent', () => {
  let component: TipsMessageComponent;
  let fixture: ComponentFixture<TipsMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
