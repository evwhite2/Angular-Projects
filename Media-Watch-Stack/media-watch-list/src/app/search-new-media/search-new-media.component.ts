import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import {OmdbApiService } from '../omdb-api.service';
import { DataTile } from '../dataTile';
import { MediaItemService } from '../media-item.service';
import { MediaItemTemplate } from '../mediaItem';

@Component({
  selector: 'app-search-new-media',
  templateUrl: './search-new-media.component.html',
  styleUrls: ['./search-new-media.component.css']
})

export class SearchNewMediaComponent implements OnInit{
  
  @Input() searchTerm: String;
  @ViewChild('zeroResult') zeroResult: ElementRef;

  public result= [];
  public attempt= false;
  public allresults;
  title;

  constructor(
    private omdb: OmdbApiService, 
    private mediaItemService: MediaItemService) {  
      this.allresults = new Subject<DataTile[]>()
     }

  ngOnInit() {
    }

  searchTitle(term:string){
    term= this.convertString(term);
    this.omdb.getSearchResult(term)
    .subscribe(data=>{
      if(data.Response==="False"){
        this.attempt=true;
      }else{
        data.Search.forEach(title=>{
        this.allresults.observers.push(title)
        })
      }
    })
      this.clearSearch();
      this.result =this.allresults.observers;
  }

  onAddTitle(title){
    this.omdb.getTitleSearch(this.convertString(title.Title))
    .subscribe(data=>{
        let newTitle = {
        id: 10,
        name: data.Title,
        medium: data.Type,
        genre: data.Genre,
        year: data.Year,
        rating: data.imdbRating,
        plot: data.Plot,
        views: null,
        isFavorite: false
      }
    this.mediaItemService.add(newTitle)
    })
  }

  convertString(term: string){
    let termArray = term.substring(0, term.length).split("");
    for (var i = 0; i< termArray.length-1; i++){
      if(termArray[i] ===" "){
        termArray[i] = "+"
      }
    }
    term = termArray.join("");
    return term;
  }

  toggleNoResult(result: boolean){
    if(result){
      this.zeroResult.nativeElement.classList("zeroResult");
    }else{
      this.zeroResult.nativeElement.classList.REMOVE("zeroResult");
    }
  }

  clearSearch(){
    this.attempt=false;
    this.allresults.observers=[];
  }

  }
  
