import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {OmdbApiService } from '../omdb-api.service';
import { DataTile } from '../dataTile';
import {MOCKDATA} from '../mock2';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { MediaItemService } from '../media-item.service';

@Component({
  selector: 'app-search-new-media',
  templateUrl: './search-new-media.component.html',
  styleUrls: ['./search-new-media.component.css']
})

export class SearchNewMediaComponent implements OnInit{
  
  @Input() searchTerm: String;

  public result= [];
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
      JSON.stringify(data)
      this.allresults.observers.push(data);
    })
      this.clearSearch();
      this.result =this.allresults.observers;
  }

  onAddTitle(title){
    console.log(title);
    // let newTitle: !!!!!!!!!!! need media Item Constructor
    this.mediaItemService.add(title)
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

  clearSearch(){
    this.allresults.observers=[];
  }

  }
  
