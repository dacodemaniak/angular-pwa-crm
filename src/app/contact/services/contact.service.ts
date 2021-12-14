import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class ContactService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public add(contact: any): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.backendAPI}person`,
      contact,
      {
        observe: 'response'
      }
    )
  }

  public update(): void {}

  public delete(): void {}

  public one(): void {}

  public all(): void {}
}
