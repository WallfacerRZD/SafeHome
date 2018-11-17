import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageContentListComponent } from './message-content-list.component';

describe('MessageContentListComponent', () => {
  let component: MessageContentListComponent;
  let fixture: ComponentFixture<MessageContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageContentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
