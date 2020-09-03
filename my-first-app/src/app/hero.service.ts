import { Injectable } from '@angular/core';

// RxJS of() to return an observable of mock heroes (Observable<Hero[]>).
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  // . The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
  constructor(private _messageService: MessageService) { }

  //Without this observable, a live application would crash since it is initalizing external data asynchronisly.. the injection of the Observable into the root along with the additon of the 'subscribe' method to heroesComponent.getHeros() allows the assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
  getHeroes(): Observable<Hero[]> {
    this._messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
