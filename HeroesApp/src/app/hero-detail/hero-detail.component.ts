import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

import { Hero } from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute, 
    private _heroService: HeroService, 
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void{
    this.location.back();
  }

  save(name: string): void{  
    this.hero.name = name.trim();
    if(!name){ return; }
    this._heroService.updateHero({id: this.hero.id, name: name} as Hero)
    .subscribe(() => this.goBack());
  }

}
