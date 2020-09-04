import { Injectable } from '@angular/core';

// RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesURL = 'api/heroes';

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
    this.log(`fetched hero with ID: ${id}`);
    return of(HEROES.find(hero=> hero.id === id));
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

}
