import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
@Injectable()
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public add(company: any): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.backendAPI}company`,
      company,
      {
        observe: 'response'
      }
    );
  }
}
