import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService, private _messageService: MessageService) { }

  // The component's ngOnInit lifecycle hook calls the HeroService method, not the constructor.
  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this._messageService.add(`HeroesComponent: Select hero id=${hero.id}`);
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void{
    name = name.trim();
    if(!name){ return; }
    this._heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      })
  }
  

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this._heroService.deleteHero(hero).subscribe(); //if you do not use the suscribe service, the delete request will not be sent to the server, as a rule, Observable does NOTHING until it subscribes
  }
}
