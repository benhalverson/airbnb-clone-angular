import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from './booking.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  makeBooking(booking: Booking): Observable<any> {
    return this.http.post('/api/v1/bookings', booking)
  }

  public getUserBookings(): Observable<any> {
    return this.http.get('/api/v1/bookings/manage');
  }
}
