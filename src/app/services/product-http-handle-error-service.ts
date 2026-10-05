import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Product } from '../classes/IProduct';

import { Observable } from 'rxjs/internal/Observable';

import { retry } from 'rxjs/internal/operators/retry';

import { catchError } from 'rxjs/internal/operators/catchError';

import { map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductHttpHandleErrorService {

  private _url = "/datasets/products.json";

  constructor(private _http: HttpClient) {}

  getProductList(): Observable<Product[]> {

    return this._http.get<Product[]>(this._url)

      .pipe(

        retry(3),

        catchError(this.handleError)

      );

  }

  getProductById(id: number): Observable<Product | undefined> {

    return this.getProductList().pipe(

      map((products: Product[]) => products.find(p => p.id === id)),

      catchError(this.handleError)

    );

  }

  private handleError(error: HttpErrorResponse) {

    return throwError(() => error);

  }

}