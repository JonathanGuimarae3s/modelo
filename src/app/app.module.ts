// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

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
import { CardComponent } from './components/card/card.component';

import { InputComponent } from './components/input/input.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { CursosComponent } from './pages/cursos/cursos.component';



import { BelezaFemininaComponent } from './pages/beleza-feminina/beleza-feminina.component';

import { CursosAddComponent } from './pages/cursos-add/cursos-add.component';


import { BarbeariaComponent } from './pages/barbearia/barbearia.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';


import { CursosUpdateComponent } from './pages/cursos-update/cursos-update.component';

import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { NavbarAdmComponent } from './components/navbar-adm/navbar-adm.component';




@NgModule({
  declarations: [
    BelezaFemininaComponent,
    CursosComponent,
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
    CardComponent,

    InputComponent,
    DashboardComponent,

    CursosAddComponent,



     BarbeariaComponent,
    SobreComponent,
    ContatoComponent,


    BarbeariaComponent,
    CursosUpdateComponent,

    AgendamentoComponent,

     NavbarAdmComponent,








  ],
  imports: [CommonModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, SharedModule, BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
