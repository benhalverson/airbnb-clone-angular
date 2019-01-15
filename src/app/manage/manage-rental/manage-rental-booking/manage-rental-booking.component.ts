import { Component, OnInit, Input } from '@angular/core';
import { Booking } from 'src/app/booking/shared/booking.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-rental-booking',
  templateUrl: './manage-rental-booking.component.html',
  styleUrls: ['./manage-rental-booking.component.scss']
})
export class ManageRentalBookingComponent implements OnInit {
  @Input() bookings: Booking[];
  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

}
