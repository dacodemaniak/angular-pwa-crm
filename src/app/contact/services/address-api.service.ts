import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
@Injectable()
export class AddressApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAddress(input: string): Observable<any> {
    return this.httpClient.get<any>(
      `${environment.addressAPI}=${input}`
    ).pipe(
      take(1),
      map((results: any) => {
        return results.features.map((feature: any) => feature.properties)
      })
    )
  }
}
