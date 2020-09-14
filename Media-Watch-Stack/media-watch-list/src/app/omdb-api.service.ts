import { Injectable } from '@angular/core';
import { Observable, of, observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DataTile } from './dataTile';
import { TitleTile } from './titleTile';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class OmdbApiService {

  resultsURL= 'api/result';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getSearchResult(searchTerm: string): Observable<DataTile>{
    let url = `http://www.omdbapi.com/?apikey=3c94efbd&s=${searchTerm}`
    return this.http.get<DataTile>(url)
    .pipe(tap( data=>{
      console.log("Service Response: ", data), catchError(this.handleError);
    }));
  }

  getTitleSearch(searchTerm: string): Observable<TitleTile>{
    let url = `http://www.omdbapi.com/?apikey=3c94efbd&t=${searchTerm}`
    return this.http.get<TitleTile>(url)
    .pipe(tap( data=>{
      console.log(`Service Response: ${data.Title} `, data), catchError(this.handleError);
    }));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
} 

}

