import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gituser-card',
  templateUrl: './gituser-card.component.html',
  styleUrls: ['./gituser-card.component.scss'],
})
export class GituserCardComponent implements OnInit {

  @Input() item:any;
  //for shrinking and expanding the data
  collapse: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  
}
