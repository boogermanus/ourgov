import {Component, inject, signal} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {HttpClient, HttpParams} from '@angular/common/http';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [MatInputModule, MatInputModule, MatButton, ReactiveFormsModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly form: FormGroup
  protected readonly addressControl: FormControl<string>;
  protected readonly title = signal('Welcome to OurGov');
  protected readonly httpClient: HttpClient = inject(HttpClient);

  constructor() {
    this.addressControl = new FormControl<string>('', {nonNullable: true, validators: [Validators.required]});
    this.form = new FormGroup({
      address: this.addressControl
    });
  }
  protected onSubmit() {
    console.log(this.form.value);
    let httpParams = new HttpParams()
      .append('address', this.addressControl.value)
      .append('benchmark', 4)
      .append('vintage', 4)
      .append('format', 'json');
    this.httpClient.get<string>('https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress', { params: httpParams})
      .subscribe(response => {console.log(response);})
  }
}
