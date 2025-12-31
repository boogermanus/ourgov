import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {Geocoding} from '../../services/geocoding.service';
import {Observable} from 'rxjs';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-address-search',
  imports: [MatInputModule, MatInputModule, MatButton, ReactiveFormsModule, FormsModule, JsonPipe, AsyncPipe],
  templateUrl: './address-search.html',
  styleUrl: './address-search.scss',
})
export class AddressSearch {
  protected readonly form: FormGroup
  protected readonly addressControl: FormControl<string>;
  protected readonly geoCodingService: Geocoding = inject(Geocoding);
  protected geocodingData!: Observable<any>;
  constructor() {
    this.addressControl = new FormControl<string>('', {nonNullable: true, validators: [Validators.required]});
    this.form = new FormGroup({
      address: this.addressControl
    });
  }

  protected onSubmit() {
    this.geocodingData = this.geoCodingService.getGeocodingData(this.addressControl.value);
  }
}
