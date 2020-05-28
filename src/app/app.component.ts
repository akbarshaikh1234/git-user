import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './service/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  totalCount = 60;
  perPage = 3;
  length = 5;
  page = 1;
  items = [];

  constructor(private git : HttpServiceService){}
  
  ngOnInit(){
    this.getUsersData('a');
  }

  getUsersData(query){
    this.git.getSearchUsers(query,this.page,this.perPage).then((res:any) => {
      this.totalCount = res.total_count;
      this.items = res.items;
      console.log(res)
    })
  }
}
