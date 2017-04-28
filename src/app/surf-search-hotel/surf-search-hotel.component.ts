import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-surf-search-hotel',
  templateUrl: './surf-search-hotel.component.html',
  styleUrls: ['./surf-search-hotel.component.css'],
  providers : [AppService]
})
export class SurfSearchHotelComponent implements OnInit {

  SearchContractHedding = "Search Hotel";
  searchData = {
    id : null,
    adults: 2,
    checkIN: 1494021800000,
    checkOut: 1506969000000,
    roomRequestDetails : [[1, 2], [1, 3]]
  };


  items : any[];
  hotel = 'My Hotel';

  moreadults = true;
  hasChanged = false;

  adultCount= 0;
  input_rooms : number;
  input_adults : number;

  constructor(private appservice: AppService) { }

  ngOnInit() {
    this.appservice.getData()
      .subscribe(
        (data : any) => console.log(data)
      );
    this.searchData.roomRequestDetails.splice(0, 2);
    console.log(this.searchData.roomRequestDetails);
  }

  onSubmit(){

    console.log(this.searchData)
    this.appservice.search(
      this.searchData
    ).subscribe(
      (data) => this.items = data
    );

  }

  addRoomDetail(){
    this.adultCount = this.adultCount + this.input_rooms * this.input_adults;
    if (this.searchData.adults == this.adultCount){

      this.moreadults = false;
    }
    if (this.searchData.adults < this.adultCount){
      //return invaildation
      this.moreadults = false;
    }
    console.log(this.adultCount);
    this.hasChanged = false;
    const roomdata = [this.input_rooms, this.input_adults];
    this.searchData.roomRequestDetails.push(roomdata);

    console.log(this.searchData.roomRequestDetails);
  }

  setroom(event : any){
    this.input_rooms = parseInt(event.value, 10);
    console.log(this.input_rooms);
  }
  setAdults(event : any){
    this.input_adults = parseInt(event.value, 10);
    console.log(this.input_adults);
    this.hasChanged = true;
  }
}
