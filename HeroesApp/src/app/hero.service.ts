import { Injectable } from '@angular/core';

// RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Hero } from "./hero";
// import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesURL = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // . The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
  constructor(
    private http: HttpClient,
    private _messageService: MessageService
    ) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesURL)
      .pipe(
        tap(_ => //The HeroService methods will tap into the flow of observable values and send a message, via the log() method, to the message area at the bottom of the page.
          this.log('fetched all heros')), catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }
  //Without this observable, a live application would crash since it is initalizing external data asynchronisly.. the injection of the Observable into the root along with the additon of the 'subscribe' method to heroesComponent.getHeros() allows the assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesURL}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ =>
        this.log(`fetched hero with ID: ${id}`)), catchError(this.handleError<Hero>(`getHero(${id}`))
    )
    // return of(HEROES.find(hero=> hero.id === id));
  }

  private log(message: string) {
    this._messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> =>{
      // TODO: send the error to remote logging infrastructure
      console.error(error)
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesURL, hero, this.httpOptions).pipe(
      tap(_ =>
        this.log(`updated hero ID: ${hero.id}`)), catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero:Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesURL, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => 
      this.log(`added new hero with ID: ${newHero.id}`)), catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero | number ): Observable<Hero>{
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesURL}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(tap(_=>
        this.log(`deleted hero ID: ${id}`)), catchError(this.handleError<Hero>('deleteHero'))
        );
  }
  
  searchHeroes(term: string): Observable<Hero[]>{
    if(!term.trim()){ 
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesURL}/?name=${term}`).pipe(
      tap(x => 
        x.length ?
        this.log(`No hero found using: ${term}.`) :
        this.log(`no heroes matching "${term}"`),
        catchError(this.handleError<Hero[]>('searchHeroes', [])))
        );
  }

}
