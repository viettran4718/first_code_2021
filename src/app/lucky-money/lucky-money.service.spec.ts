import { TestBed } from '@angular/core/testing';

import { LuckyMoneyService } from './lucky-money.service';

describe('LuckyMoneyService', () => {
  let service: LuckyMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuckyMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
