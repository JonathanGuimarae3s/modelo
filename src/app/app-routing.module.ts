import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { BelezaFemininaComponent } from './pages/beleza-feminina/beleza-feminina.component';

import { CursosComponent } from './pages/cursos/cursos.component';


const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path: 'dashboard', component:DashboardComponent},

  {path: 'agendamento', component:AgendamentoComponent},
  {path: 'belezafeminina', component:BelezaFemininaComponent},


  {path:'cursos', component:CursosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
