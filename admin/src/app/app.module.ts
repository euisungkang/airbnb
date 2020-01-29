import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { UsersComponent } from '../app/components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { BookingsComponent } from './components/bookings/bookings.component';
import { ListingComponent } from './components/listing/listing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UsersComponent,
    HomeComponent,
    BookingsComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
