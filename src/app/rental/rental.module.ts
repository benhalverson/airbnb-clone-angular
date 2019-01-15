import { NgModule } from '@angular/core';
import { CommonModule, UpperCasePipe } from '@angular/common';
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

const routes: Routes = [
  {path: 'test', component: RentalComponent,
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
    UpperCasePipe,
    RentalDetailComponent,
    RentalSearchComponent,
    RentalCreateComponent,
    RentalUpdateComponent,
    RentalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule,
    FormsModule
  ],
  providers: [
    RentalService,
    RentalGuard,
    UcWordsPipe
  ]
})
export class RentalModule { }
