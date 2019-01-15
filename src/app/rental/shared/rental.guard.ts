import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RentalService } from './rental.service';

@Injectable({
  providedIn: 'root'
})
export class RentalGuard implements CanActivate {

  constructor(private rentalService: RentalService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    const rentalId: string = route.params.rentalId;
    return this.rentalService.verifyRentalUser(rentalId).pipe((map(() => {
      return true;
    }),
      catchError(() => {
        this.router.navigate(['']);
        return observableOf(false);
      })
    ))
  }

}
