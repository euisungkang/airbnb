import { Component, OnInit } from '@angular/core';
import { Listing } from '../../models/listing';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  private listings: Array<Listing> = [];

  constructor(private listingService: ListingService) {
    this.listings = listingService.getListings();
    console.log(this.listings);
  }

  ngOnInit() {
  }
}
