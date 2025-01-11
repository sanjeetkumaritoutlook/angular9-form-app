import { TestBed } from '@angular/core/testing';

import { QuestionControService } from './question-contro.service';

describe('QuestionControService', () => {
  let service: QuestionControService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionControService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
