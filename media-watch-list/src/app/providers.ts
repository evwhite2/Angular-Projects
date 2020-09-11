import {InjectionToken} from '@angular/core';

export const lookupListsToken = new InjectionToken('lookupListsToken')

export const lookupLists ={
    mediums: ['Films', 'Series'],
    categories: ['Action', 'Adventure', 'Comedy', 'Documentary', 'Drama', 'Fantasy', 'Historical', 'Horror', 'Romance', 'Science Fiction', 'Thriller']
  };
  

