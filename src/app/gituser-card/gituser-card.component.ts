import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/datamodel';

@Component({
  selector: 'gituser-card',
  templateUrl: './gituser-card.component.html',
  styleUrls: ['./gituser-card.component.scss'],
})
export class GituserCardComponent implements OnInit {

  @Input() item:User;
  //for shrinking and expanding the data
  collapse: boolean = false;
  showSlide=''
  constructor() { }

  ngOnInit() {
  }

  getOnly2Repos(repo){
    let arr = repo.slice(0,2);
    console.log(arr)
  }
  

}
