import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  public title: string;
  public location: string;
  public description: string;
  public numberOfPeople: number;
  public pricePerNight: number;
  public hostId: number;
  public url: string;

  private listings: Array<Listing>;

  constructor(private httpClient: HttpClient) {
    this.listings = [];
    this.getAllListings();
  }

  getAllListings() {
    this.httpClient.get('http://localhost:5000/api/listings/').subscribe(response => {
      let allListings = Object.values(response);
      console.log(allListings);
      allListings.forEach(listing => {
        let bufferListing = new Listing(listing.Id, listing.title, listing.location, listing.description, listing.numberOfPeople, listing.pricePerNight, listing.hostId, listing.url);
        this.listings.push(bufferListing);
      });
      console.log(this.listings);
    });
  }

  getListings() {
    return this.listings;
  }
}
