import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css'],
  providers : [AppService]
})
export class SearchHotelComponent implements OnInit {

  searchData = {
    id: 151,
    adults: 2,
    checkIN: 1494021800000,
    checkOut: 1506969000000,
    roomRequestDetails: [[1, 2], [1, 1]]
  };

  items : any[];

  constructor(private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getData()
      .subscribe(
        (data : any) => console.log(data)
      );
  }

  onSubmit(){
    this.appservice.search(
      this.searchData
    ).subscribe(
      (data) => this.items = data
    );
  }
}
