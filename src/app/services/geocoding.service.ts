import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Geocoding {
  private httpClient: HttpClient = inject(HttpClient);

  public getGeocodingData(address: string): Observable<any> {
    let httpParams = new HttpParams()
      .append('address', address)
      .append('benchmark', 4)
      .append('vintage', 4)
      .append('format', 'json');
    return this.httpClient.get<any>('/geocoder/geographies/onelineaddress', {params: httpParams})
  }
}
