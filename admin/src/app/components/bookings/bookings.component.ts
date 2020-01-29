import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  public bookings: Array<Booking> = [];

  constructor(private bookingService: BookingService) {
    this.bookings = bookingService.getBookings();
    console.log(this.bookings);
  }

  ngOnInit() {
  }
}
