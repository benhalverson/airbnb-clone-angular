import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/booking/shared/booking.model';
import { BookingService } from 'src/app/booking/shared/booking.service';
import { PaymentService } from 'src/app/payment/shared/payment.service';

@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.scss']
})
export class ManageBookingComponent implements OnInit {
  bookings: Booking[];
  payments: any[];

  constructor(private bookingService: BookingService, private paymentService: PaymentService
    ) { }

  ngOnInit() {
    // this.bookingService.getPendingPayment()
  }

  getPendingPayments() {
    this.paymentService.getPendingPayments().subscribe(
      (payments: any) => {
        this.payments = payments;
      }
    )
  }

  acceptPayment(payment) {
    this.paymentService.acceptPayment(payment).subscribe(
      (json) => {
        payment.status = 'paid'
      },
      err => {
        console.error(`Payment Error: ${err}`);
      }
    )
  }

  declinePayment(payment) {
    this.paymentService.declinePayment(payment).subscribe(
      (json) => {
        payment.status = 'declined';
      },
      (err) => {
        console.error(`Payment Error: ${err}`);
      }
    )
  }

}
