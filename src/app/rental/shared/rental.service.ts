import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  public getRentalById(rentalId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/v1/rentals/${rentalId}`)
  }

  public getRentals() {
    return this.http.get('http://localhost:3000/api/v1/rentals')
  }

  public getRentalsByCity(city: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/v1/rentals?city=${city}`);
  }

  public createRental(rental) {
    return this.http.post('http://localhost:3000/api/v1/rentals', rental)
  }

  public getUserRentals() {
    return this.http.get('http://localhost:3000/api/v1/rentals/manage');
  }

  public deleteRental(rentalId) {
    return this.http.delete(`http://localhost:3000/api/v1/rentals/${rentalId}`);
  }

  public updateRental(rentalId: string, rentalData: string): Observable<any> {
    return this.http.patch(`http://localhost:3000/api/v1/rentals/${rentalId}`, rentalData);
  }

  public verifyRentalUser(rentalId: string) {
    return this.http.get(`http://localhost:3000/api/v1/rentals/${rentalId}/verify-user`);
  }
}

