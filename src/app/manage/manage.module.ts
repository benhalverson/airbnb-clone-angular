import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { ManageRentalComponent } from './manage-rental/manage-rental.component';
import { ManageRentalBookingComponent } from './manage-rental/manage-rental-booking/manage-rental-booking.component';
import { AuthGuard } from '../auth/shared/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgPipesModule } from 'ngx-pipes';
import { RentalService } from '../rental/shared/rental.service';
import { BookingService } from '../booking/shared/booking.service';
// import { FormatDatePipe } from '../common/pipes/format-date.pipe';
const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    children: [
      { path: 'rental', component: ManageRentalComponent, canActivate: [AuthGuard] },
      { path: 'bookings', component: ManageBookingComponent, canActivate: [AuthGuard] },
    ],
  },
];
@NgModule({
  declarations: [
    ManageComponent,
    ManageBookingComponent,
    ManageRentalComponent,
    ManageRentalBookingComponent,
    // FormatDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgPipesModule
  ],
  providers: [
    RentalService,
    BookingService
  ]
})
export class ManageModule {}
