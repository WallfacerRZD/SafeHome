import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageContent} from './message-content.component';

describe('MessageContent', () => {
  let component: MessageContent;
  let fixture: ComponentFixture<MessageContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageContent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
