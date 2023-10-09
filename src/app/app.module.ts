import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AboutComponent } from './components/about/about.component';
import { DestinationComponent } from './components/destination/destination.component';
import { PackageComponent } from './components/package/package.component';
import { BookingComponent } from './components/booking/booking.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { LoginComponent } from './login/login.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { TeamComponent } from './components/team/team.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,FooterComponent,HeaderComponent, TopBarComponent, SpinnerComponent,
    AboutComponent, DestinationComponent, PackageComponent, BookingComponent, TestimonialComponent, LoginComponent,NavbarComponent, TeamComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
