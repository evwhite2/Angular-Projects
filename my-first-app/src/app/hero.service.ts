import { Injectable } from '@angular/core';

// RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    this.log("HeroService fetching heros");
    return this.http.get<Hero[]>(this.heroesURL);
    // return of(HEROES)
  }
  //Without this observable, a live application would crash since it is initalizing external data asynchronisly.. the injection of the Observable into the root along with the additon of the 'subscribe' method to heroesComponent.getHeros() allows the assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
  getHero(id: number): Observable<Hero> {
    this.log(`HeroService: fetched hero with ID: ${id}`);
    return of(HEROES.find(hero=> hero.id === id));
  }

  private log(message: string) {
    this._messageService.add(`HeroService: ${message}`);
  }

}
