/**
 * Tests Address Component
 *   
 * @group 2222
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


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
    component.address = {
      streetAddress: '222 Main st',
      apartment: '1232',
      city: 'Ketterdam',
      stateCode: 'Z0',
      zip: '32321' 
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render address', () => {
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('#sd')).nativeElement.textContent).toContain('222 Main st');
    expect(compiled.query(By.css('#apt')).nativeElement.textContent).toContain('1232');
    expect(compiled.query(By.css('#city')).nativeElement.textContent).toContain('Ketterdam');
    expect(compiled.query(By.css('#zip')).nativeElement.textContent).toContain('32321');
    expect(compiled.query(By.css('#stateCode')).nativeElement.textContent).toContain('Z0');
    })
});
