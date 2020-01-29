import { Injectable } from '@angular/core';
import { Booking } from '../models/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookings: Array<Booking>;

  constructor(private httpClient: HttpClient) {
    this.bookings = [];
    this.getAllBookings();
  }

  getAllBookings() {
    this.httpClient.get('http://localhost:5000/api/bookings/').subscribe(response => {
      let allBookings = Object.values(response);
      console.log(allBookings);
      allBookings.forEach(booking => {
        let bufferBooking = new Booking(booking.Id, booking.listingId, booking.userId, booking.hostId, booking.status, booking.dateStart, booking.dateEnd);
        this.bookings.push(bufferBooking);
      });
      console.log(this.bookings);
    })
  }

  getBookings() {
    return this.bookings;
  }
}