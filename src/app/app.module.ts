import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { SurfSearchHotelComponent } from './surf-search-hotel/surf-search-hotel.component';
import {SurfInputModule} from '@surf/surf-input';
import { ViewContractComponent } from './view-contract/view-contract.component';
import {SurfHotelSummaryCard2Module} from '@surf-widgets/surf-hotel-summary-card-2';
import {SurfLiteHolidayUtilService} from '@surf/core/services/surf-lite-holiday-util.service';
import {CommonModule} from '@angular/common';
import {SurfGridModule, SurfGridSpan} from '@surf/surf-grid';
import {CoreModule, SURF_PROVIDERS} from '@surf/core';
import {RouterModule} from '@angular/router';
import {SurfModalModule} from '@surf/surf-modal';
import {SurfDropDownModule} from '@surf/surf-drop-down';
import {SurfLoaderModule} from '@surf/surf-loader';
import {SurfGmapModule} from '@surf/surf-gmap';
import {SurfExpandModule} from '@surf/surf-expand';
import {SurfFlightSummaryCard2Module} from '@surf-widgets/surf-flight-summary-card-2';
import {SurfHotelRoomSelectionModule} from '@surf-widgets/surf-hotel-room-selection';
import {SurfHotelMealPlanSelectionModule} from '@surf-widgets/surf-hotel-meal-plan-selection';
import {SurfButtonModule} from '@surf/surf-button';
import {SurfStarRatingModule} from '@surf/surf-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    SearchHotelComponent,
    AddContractComponent,
    SurfSearchHotelComponent,
    ViewContractComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    CoreModule,
    SurfGridModule,
    SurfModalModule,
    SurfGmapModule,
    SurfExpandModule,
    SurfLoaderModule,
    SurfHotelSummaryCard2Module,
    SurfHotelMealPlanSelectionModule,
    SurfHotelRoomSelectionModule,
    SurfHotelSummaryCard2Module,
    SurfFlightSummaryCard2Module,
    SurfDropDownModule,
    SurfInputModule,
    SurfButtonModule,
    SurfStarRatingModule

  ],
  providers: [SURF_PROVIDERS, SurfLiteHolidayUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
