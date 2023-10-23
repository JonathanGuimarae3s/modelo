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
<<<<<<< Updated upstream
import { TeamComponent } from './components/team/team.component';
import { BookingComponent } from './components/booking/booking.component';
import { DestinationComponent } from './components/destination/destination.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PoliticaPrivacidadeComponent } from './pages/politica-privacidade/politica-privacidade.component';
import { TermoscondicoesComponent } from './pages/termoscondicoes/termoscondicoes.component';
import { TrabalheconoscoComponent } from './pages/trabalheconosco/trabalheconosco.component';
=======
import { CursosUpdateComponent } from './pages/cursos-update/cursos-update.component';

>>>>>>> Stashed changes

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'belezafeminina', component: BelezaFemininaComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos-add', component: CursosAddComponent },
  { path: 'barbearia', component: BarbeariaComponent },
<<<<<<< Updated upstream
  { path: 'team', component: TeamComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'politicaprivacidade', component: PoliticaPrivacidadeComponent },
  { path: 'termoscondicoes', component: ContatoComponent },
  { path: 'trabaleconosco', component: TrabalheconoscoComponent },



=======
  { path: 'cursos/:id', component: CursosUpdateComponent }
>>>>>>> Stashed changes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
