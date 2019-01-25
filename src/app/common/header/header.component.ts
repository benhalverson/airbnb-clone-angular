import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/shared/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: UserService, public router: Router) { }

  ngOnInit() {
  }

  public logout() {
    this.auth.logout().subscribe(
      () => {
        this.router.navigate(['login'])
      }
    )
  }

}
