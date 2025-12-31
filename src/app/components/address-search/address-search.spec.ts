import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressSearch } from './address-search';
import {Geocoding} from '../../services/geocoding.service';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';

describe('AddressSearch', () => {
  let component: AddressSearch;
  let fixture: ComponentFixture<AddressSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressSearch,MatInputModule, MatInputModule, MatButton, ReactiveFormsModule, FormsModule],
      providers: [Geocoding, provideZonelessChangeDetection(), provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
