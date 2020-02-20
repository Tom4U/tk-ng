import { async, TestBed } from '@angular/core/testing';
import { ContractsModule } from './contracts.module';

describe('ContractsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContractsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContractsModule).toBeDefined();
  });
});
