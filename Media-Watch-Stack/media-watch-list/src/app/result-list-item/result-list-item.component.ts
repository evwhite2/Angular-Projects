import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-result-list-item',
    templateUrl: './result-list-item.component.html',
    styleUrls: ['./result-list-item.component.css']
  })

  export class ResultListItemComponent implements OnInit{

    @Input() title;
    @Output() add= new EventEmitter();

    onAdd(){
      this.add.emit(this.title);
    }

    constructor() { }

    ngOnInit():void{
    }

  }