import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.css'],
  providers : [AppService]
})
export class ViewContractComponent implements OnInit {

  ViewContractHeader= 'View Contracts';
  mydata = {
    contractID: 9,
    HotelName: 'Raddison',
    hotelrating: 0,
    validFrom: 'Apr 13, 2017 12:00:00 AM',
    validTo: 'Oct 3, 2017 12:00:00 AM',
    markup: 15
  };

  mydata2: any[][];
  constructor(private appservice: AppService) { }

  ngOnInit() {
    this.appservice.viewContract()
      .subscribe(
        (data ) => this.mydata2 = data
      );
  }

  clickFunction(event){
    console.log(event);

    this.appservice.viewRoomContract(event.contractID)
      .subscribe(
        (data ) => console.log(data)
      );
  }

}
