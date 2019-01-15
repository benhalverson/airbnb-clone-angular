import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/shared/auth.guard';
import { UserService } from './shared/user.service';
import { AuthService } from '../auth/shared/auth.service';
import { UserDetailComponent} from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    children: [{
      path: 'profile',
      canActivate: [AuthGuard],
      component: UserDetailComponent
    }]
  }
]
@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    UserService
  ]
})
export class UserModule { }
