import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import {OmdbApiService } from '../omdb-api.service';
import { DataTile } from '../dataTile';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-search-new-media',
  templateUrl: './search-new-media.component.html',
  styleUrls: ['./search-new-media.component.css']
})

export class SearchNewMediaComponent implements OnInit{
  
  @Input() title;
  @Output() addBtn= new EventEmitter();
  @Output() searchBtn= new EventEmitter();

  private result = [];
  result$ : Observable<DataTile[]>
  private searchTerm = new Subject<string>();

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private omdb: OmdbApiService) {   }

  
  searchTitle(term:string){
    this.omdb.getSearchResult(term)
    .subscribe(data=>{
      console.log("1111", data)
      this.result.push(data);
      });
  }

  ngOnInit() {
    this.searchTitle("t=out+cold")
    console.log(this.result.map(i=>{
      console.log("222", i)
    }));
  }

  }
  
