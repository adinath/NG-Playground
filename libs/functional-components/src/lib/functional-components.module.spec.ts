import { async, TestBed } from '@angular/core/testing';
import { FunctionalComponentsModule } from './functional-components.module';

describe('FunctionalComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FunctionalComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FunctionalComponentsModule).toBeDefined();
  });
});
