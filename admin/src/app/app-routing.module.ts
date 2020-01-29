import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { UsersComponent } from '../app/components/user/user.component';
import { FormsModule } from '@angular/forms';
import { ListingComponent } from './components/listing/listing.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'listings', component: ListingComponent},
  { path: 'bookings', component: BookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }