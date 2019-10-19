import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalSearchComponent } from './rental-search/rental-search.component';
import { RentalCreateComponent } from './rental-create/rental-create.component';
import { RentalUpdateComponent } from './rental-update/rental-update.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgPipesModule, UcWordsPipe } from 'ngx-pipes';
import { RentalService } from './shared/rental.service';
import { RentalGuard } from './shared/rental.guard';
import { AuthGuard } from '../auth/shared/auth.guard';
import { RentalComponent } from './rental.component';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';
import { ToastrModule } from 'ngx-toastr';
import { Daterangepicker } from 'ng2-daterangepicker';

const routes: Routes = [
  {path: 'rentals', component: RentalComponent,
  children: [
    { path: '', component: RentalListComponent },
    { path: 'new', component: RentalCreateComponent, canActivate: [AuthGuard]},
    { path: ':rentalId/edit', component: RentalUpdateComponent, canActivate: [AuthGuard, RentalGuard]},
    { path: ':rentalId', component: RentalDetailComponent},
    { path: ':city/homes', component: RentalSearchComponent}
  ]
}
  
]
@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    RentalDetailComponent,
    RentalSearchComponent,
    RentalCreateComponent,
    RentalUpdateComponent,
    RentalComponent,
    RentalDetailBookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    Daterangepicker
  ],
  providers: [
    RentalService,
    RentalGuard,
    UcWordsPipe
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class RentalModule { }
