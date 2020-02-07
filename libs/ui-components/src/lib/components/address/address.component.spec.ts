import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display addres works', () => {
    const fixture1 = TestBed.createComponent(AddressComponent);
    fixture1.detectChanges();
    const compiled = fixture1.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'address does not works!'
    );
  })
});
