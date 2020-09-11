import { Injectable } from '@angular/core';
import { Observable, of, observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DataTile } from './dataTile';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {

  resultsURL= 'api/result';
  omdbURL= "http://www.omdbapi.com/?apikey=[3c94efbd]&t=";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getSearchResult(searchTerm: string): Observable<DataTile[]>{
    return this.http.get<string[]>(`http://www.omdbapi.com/?apikey=3c94efbd&${searchTerm}`)
      .pipe(tap(data=>{
        JSON.stringify(data);
      console.log("Service Response: ", data), catchError(this.handleError);
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

  // private handleError<T>(operation = 'operation', result?: T){
  //   return (error: any): Observable<T> =>{
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error)
  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   }
  // }
}

