import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OmdbApiService } from '../omdb-api.service';
import { TitleTile } from '../titleTile';

@Component({
  selector: 'app-view-search-details',
  templateUrl: './view-search-details.component.html',
  styleUrls: ['./view-search-details.component.css']
})
export class ViewSearchDetailsComponent implements OnInit {

  @Input() title: TitleTile;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private omdb: OmdbApiService
  ) { }

  goBack():void{
    this.location.back();
  }

  ngOnInit(){
    this.getDetails();
  }

  getDetails(): void{
    const id = this.route.snapshot.paramMap.get('imdbID');
    this.omdb.getDetailsbyId(id).subscribe(data=> this.title = data);
  }

}
