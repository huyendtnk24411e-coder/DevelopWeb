import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { throwError } from 'rxjs/internal/observable/throwError';

import { Product } from '../classes/IProduct';

import { Observable } from 'rxjs/internal/Observable';

import { retry } from 'rxjs/internal/operators/retry';

import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({

  providedIn: 'root'

})

export class ProductHttpHandleErrorService {

  private _url = "/datasets/products1.json";

  constructor(private _http: HttpClient) {}

  getProductList(): Observable<Product[]> {

    return this._http.get<Product[]>(this._url)

      .pipe(

        retry(3),

        catchError(this.handleError)

      );

  }

  handleError(error: HttpErrorResponse) {

    console.log("error.error:", error.error);

    console.log("error.headers:", error.headers);

    console.log("error.status:", error.status);

    console.log("error.statusText:", error.statusText);

    console.log("error.url:", error.url);

    console.log("error.message:", error.message);

    return throwError(() => new Error(error.message));

  }

}