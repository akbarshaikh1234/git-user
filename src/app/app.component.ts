import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './service/http-service.service';
import { User } from './model/datamodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  totalCount: number = 0; //keep the total search result for a given query
  perPage: number = 3; // holds the number -- indicates the howmany result to display per page
  items: User[] = []; // Array data of retrived results

  queryObj = {
    q: 'a',
    per_page: 3,
    page: 1,
  }

  //default sort style
  sortOrderType='asc_name';

  constructor(private git: HttpServiceService) { }

  ngOnInit(): void {
    //predefined search query so that user does not see empty screen eleminating the need for placeholder component
    this.getUsersData();
  }

  getUsersData(): void {
    this.git.getSearchUsers(this.queryObj).then(async (res: any) => {
      let queryResult = []

      for (let item of res.items) {
        try {
          let data = await this.git.getUsersRepoDetails(item.login);
          item.repos = data;
          queryResult.push(item)
        } catch (err) {
          console.log(err)
        }

      }
      this.totalCount = res.total_count;
      this.items = queryResult;

      // On every sort api call the returned data is sorted 
      // based on the sort type selected on the sort dropdown
      this.sortOrder(this.sortOrderType)
    }).catch(err => {
      console.log(err)
    });

    
  }

  searchQuery(qString) {
    this.queryObj.q = qString
    this.getUsersData()
  }

  changePage(page) {
    console.log(page);
    this.queryObj.page = page;
    this.getUsersData()
  }

  //sort function to sort based on the sort criteria 
  //FOR RANK SORTING I WENT WITH SORTING WITH IDS
  sortOrder(sortType) {
    switch (sortType) {
      case 'asc_name':
        this.items.sort((a, b) => {
          if (a.login < b.login) return -1; else return 1
          return 0;
        })
        break;
      case 'desc_name':
        this.items.sort((a, b) => {
          if (a.login > b.login) return -1; else return 1
          return 0;
        })
        break;
      case 'asc_rank':
        this.items.sort((a, b) => b.id - a.id)
        break;
      case 'desc_rank':
        this.items.sort((a, b) => a.id - b.id)
        break;
    }
    this.sortOrderType = sortType;
  }

}
