import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './service/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  totalCount = 0; //keep the total search result for a given query
  perPage = 3; // holds the number -- indicates the howmany result to display per page
  // page = 1; // page value of paginated data
  items = []; // Array data of retrived results

  queryObj = {
    q : 'a',
    per_page : 3,
    page:1
  }
  constructor(private git : HttpServiceService){}

  ngOnInit() : void{
    //predefined search query so that user does not see empty screen eleminating the need for placeholder component
    this.getUsersData();
  }

  getUsersData(): void{
    this.git.getSearchUsers(this.queryObj).then((res:any) => {
      this.totalCount = res.total_count;
      this.items = res.items;
    });
  }

  searchQuery(qString){
    this.queryObj.q = qString
    this.getUsersData()
  }
  changePage(page){
    console.log(page);
    this.queryObj.page = page;
    this.getUsersData()
  }


}
