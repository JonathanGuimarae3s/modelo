import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,FooterComponent,HeaderComponent, SpinnerComponent, NavbarComponent, TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
