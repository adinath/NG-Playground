/**
 * Tests Name Component
 *   
 * @group 1111
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameComponent } from './name.component';

describe('NameComponent', () => {
  let component: NameComponent;
  let fixture: ComponentFixture<NameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render name', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Coming Soon At');
    })
});
