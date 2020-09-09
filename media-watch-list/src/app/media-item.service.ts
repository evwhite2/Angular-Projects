import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})

export class MediaItemService {
  mediaItems = [
    {
      id: 1,
      name: "Carey",
      medium: "film",
      category: [" Horror"],
      year: 1976,
      watchedOn: 11,
      isFavorite: false
    },{
      id: 2,
      name: "Out Cold",
      medium: "film",
      category: [" Comedy", " Action"],
      year: 2001,
      watchedOn: 342235,
      isFavorite: true
    },{
      id: 3,
      name: "Avatar",
      medium: "series",
      category: [" Anime", " Fantasy"],
      year: 2005,
      watchedOn: 23423432,
      isFavorite: false
    },{
      id: 4,
      name: "Ugly Americans",
      medium: "series",
      category: [" Comedy", " Fantasy"],
      year: 2010,
      watchedOn: 2423345,
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
