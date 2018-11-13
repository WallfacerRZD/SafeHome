import {MainPageModule} from './main-page.module';

describe('MainPageModule', () => {
  let mainModule: MainPageModule;

  beforeEach(() => {
    mainModule = new MainPageModule();
  });

  it('should create an instance', () => {
    expect(mainModule).toBeTruthy();
  });
});
