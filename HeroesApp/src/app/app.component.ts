import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // you can now use <app-root></app-root> in the HTML to call this, as seen in the index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Tour of Heroes';
}

