import {MessageContentModule} from './message-content.module';

describe('MessageContentModule', () => {
  let dialogPageModule: MessageContentModule;

  beforeEach(() => {
    dialogPageModule = new MessageContentModule();
  });

  it('should create an instance', () => {
    expect(dialogPageModule).toBeTruthy();
  });
});
