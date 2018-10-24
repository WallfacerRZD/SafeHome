import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsIconComponent } from './tips-icon.component';

describe('TipsIconComponent', () => {
  let component: TipsIconComponent;
  let fixture: ComponentFixture<TipsIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
