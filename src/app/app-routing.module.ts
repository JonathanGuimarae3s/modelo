import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { BelezaFemininaComponent } from './pages/beleza-feminina/beleza-feminina.component';

import { CursosComponent } from './pages/cursos/cursos.component';
import { CursosAddComponent } from './pages/cursos-add/cursos-add.component';
import { BarbeariaComponent } from './pages/barbearia/barbearia.component';
import { TeamComponent } from './components/team/team.component';
import { BookingComponent } from './components/booking/booking.component';
import { DestinationComponent } from './components/destination/destination.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CursosUpdateComponent } from './pages/cursos-update/cursos-update.component';
import { NavbarAdmComponent } from './components/navbar-adm/navbar-adm.component';
import { ClientService } from './model/service/client/client.service';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'belezafeminina', component: BelezaFemininaComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos-add', component: CursosAddComponent },
  { path: 'barbearia', component: BarbeariaComponent },
  { path: 'team', component: TeamComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },

  { path: 'cursos/:id', component: CursosUpdateComponent },
  { path: 'navbaradm', component: NavbarAdmComponent },
  { path: 'cliente', component:ClientService  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
