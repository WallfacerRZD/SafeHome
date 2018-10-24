import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavUserInfo } from './side-nav-user-info.component';

describe('SideNavUserInfo', () => {
  let component: SideNavUserInfo;
  let fixture: ComponentFixture<SideNavUserInfo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavUserInfo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavUserInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
