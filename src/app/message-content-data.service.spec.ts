import {TestBed} from '@angular/core/testing';

import {MessageContentDataService} from './message-content-data.service';

describe('MessageContentDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageContentDataService = TestBed.get(MessageContentDataService);
    expect(service).toBeTruthy();
  });
});
