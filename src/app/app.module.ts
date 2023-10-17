// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';

import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AboutComponent } from './components/about/about.component';
import { DestinationComponent } from './components/destination/destination.component';
import { PackageComponent } from './components/package/package.component';
import { BookingComponent } from './components/booking/booking.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { TeamComponent } from './components/team/team.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

import { InputComponent } from './components/input/input.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    TopBarComponent,
    SpinnerComponent,
    AboutComponent,
    DestinationComponent,
    PackageComponent,
    BookingComponent,
    TestimonialComponent,
    LoginComponent,
    NavbarComponent,
    TeamComponent,
    ButtonComponent,
    CardComponent,

    InputComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
