import { Injectable } from '@angular/core';
import { MediaItemTemplate } from './mediaItem';

@Injectable({
  providedIn: 'root' 
})

export class MediaItemService {
  
  mediaItems = [
    {
      id: 1,
      name: "Carey",
      medium: "movie",
      genre: " Horror",
      year: 1976,
      views: 11,
      isFavorite: false
    },{
      id: 2,
      name: "Out Cold",
      medium: "movie",
      genre: " Action",
      year: 2001,
      views: 422,
      isFavorite: true
    },{
      id: 3,
      name: "Avatar",
      medium: "series",
      genre: " Anime",
      year: 2005,
      views: 23423432,
      isFavorite: false
    },{
      id: 4,
      name: "Ugly Americans",
      medium: "series",
      genre: " Comedy",
      year: 2010,
      views: 420,
      isFavorite: false
    }
  ]
  constructor() { }

  get(){
    return this.mediaItems;
  }

  add(mediaItem){
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem){
    const index = this.mediaItems.indexOf(mediaItem);
    if (index >= 0 ){
      this.mediaItems.splice(index, 1);
    }
  }
}
