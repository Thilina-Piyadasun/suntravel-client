import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {ItemObj} from './ItemObj';
import {count} from 'rxjs/operator/count';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css'],
  providers: [AppService]
})
export class AddContractComponent implements OnInit {

  moreRooms = true;
  count = 0;
  rowData = [
    {
      roomNo: 0,
      type: 'Default',
      adults: 0,
      r_price: 0
    }
  ]
  ;
  country : any[];
  cities : any[];
  hotels : any[];

  hotelContracts = 1;

  roomId : number;
  roomType : string;
  maxAdults : number;
  roomprice: number;
  value: number;
  mydata2 = [{
    id: '1',
    value: 'aaaaa'
  }, {
    id: '0',
    value: 'bbb'
  }];
  mydata3 = [{
    id: '1',
    value: 'aaaaa'
  }, {
    id: '0',
    value: 'bbb'
  }];

  mydata= {
    countryID : 1 ,
    country: '',
    cityID : 101,
    cityName : '',
    hotelID : 1,
    hotelName : '',
    hotelrating : 5,
    validFrom : 0,
    validTo : 0,
    rooms : 1,
    markup : 15,
    roomContracts : []
  };

  constructor(private appservice: AppService) {
  }

  ngOnInit() {
    this.appservice.getCountry(
    ).subscribe(
      (data: any) => this.country = data
      // (data: any) => console.log(data)
    );
    this.rowData.splice(0, 1);
    console.log(this.rowData);
  }

  onSubmit(data) {
    var mydata4 = {
      countryID : 1 ,
      country: 'reytr',
      cityID : 101,
      cityName : 'sgdg',
      hotelID : 1,
      hotelName : 'dgdsg',
      hotelrating : 5,
      validFrom : 0,
      validTo : 0,
      rooms : 1,
      markup : 15,
      roomContracts : []
    };
    mydata4.roomContracts = this.rowData;
    console.log(this.mydata);

    this.appservice.addContracts(
      mydata4
    ).subscribe(
      (data) => console.log(data)
    );

  }

  getSelectedItem(event: any) {

    console.log(event.id);
    console.log(event.value);

    this.mydata.countryID = 1;
    this.mydata.country = event.value;

    this.appservice.getCity(
    ).subscribe(
      (data: any) => this.cities = data
    );
  }

  getSelectedCity(event: any){
    console.log(event.id);
    console.log(event.value);

  //  this.mydata.cityID = event.value;
    this.mydata.cityName = event.value;

    this.appservice.getHotel(
    ).subscribe(
      (data: any) => this.hotels = data
    );
  }

  getSelectedHotel(event: any){
   // this.mydata.hotelID = event.value;
    this.mydata.hotelName = event.value;
  }

  addRow() {
    this.rowData.push({
      roomNo: this.roomId,
      type: this.roomType,
      adults: this.maxAdults,
      r_price: this.roomprice
    });
    this.roomId = null;
    this.roomType = null;
    this.maxAdults = null;
    this.roomprice = null;

    this.count++;
    console.log(this.count);
    if (this.mydata.rooms <= this.count){
      this.moreRooms = false;
    }
  }

  finalValue(data){
    this.mydata.rooms = data.value;
    console.log(this.mydata.rooms);

  }
  /*setitems(){
   const testObj = {
   id: '2',
   value: 'test'

   };

   this.mydata2[0] = testObj;
   const size = this.countryID.length;

   for (let  i = 0; i < size; i++){
   const obj = {
   id: this.countryID[i][0],
   value : this.countryID[i][1]
   };
   this.mydata2[i] = obj;
   }
   }
   */

  /*getcity(){
    return this.mydata3;
  }*/
}
