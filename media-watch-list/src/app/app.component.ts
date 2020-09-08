import { Component } from '@angular/core';
import { MediaItemListComponent } from "./media-item-list/media-item-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'media-watch-list';
  mediaItems= { MediaItemListComponent };

  onMediaItemDelete(mediaItem){

  }
}
