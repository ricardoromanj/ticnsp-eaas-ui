import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { LiturgicResponse } from '../_models/index';

@Injectable()
export class LiturgyService {
  constructor(
    private http: Http
  ) {

  }

  getLiturgy(date: string, lang: string): Observable<LiturgicResponse> {
    let path = environment.serverUrl + '/liturgy' + `?date=${date}&lang=${lang}`;
    return this.http.get(path).map((response: Response) => response.json());
  }
}

