import {RouterModule, Routes} from '@angular/router';
import {SurfSearchHotelComponent} from './surf-search-hotel/surf-search-hotel.component';
import {AddContractComponent} from './add-contract/add-contract.component';
import {ViewContractComponent} from './view-contract/view-contract.component';
/**
 * Created by thilinap on 4/28/2017.
 */


const APP_ROUTES : Routes = [
  {path : '' , component : SurfSearchHotelComponent},
  {path : 'add' , component : AddContractComponent},
  {path : 'view' , component : ViewContractComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
