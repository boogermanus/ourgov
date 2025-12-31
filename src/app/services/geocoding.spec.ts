import { TestBed } from '@angular/core/testing';

import { Geocoding } from './geocoding.service';
import {provideHttpClient} from '@angular/common/http';
import {provideZonelessChangeDetection} from '@angular/core';

describe('GeocodingService', () => {
  let service: Geocoding;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideZonelessChangeDetection()]
    });
    service = TestBed.inject(Geocoding);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
