import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MessageContentBarComponent} from './message-content-bar.component';

describe('MessageContentBarComponent', () => {
  let component: MessageContentBarComponent;
  let fixture: ComponentFixture<MessageContentBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessageContentBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContentBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
