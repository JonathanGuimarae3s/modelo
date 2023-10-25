import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `<div class="container my-5">
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <app-card
        text="Cadastrar um novo curso"
        descricao="Cadastra um novo curso"
        button="Acessar"
        url="adm/cursos-add"
      ></app-card>
    </div>
    <div class="col">
      <app-card
        text="Cursos"
        descricao="Cursos disponíveis"
        button="Acessar"
        url="adm/cursos"
      ></app-card>
    </div>
    <div class="col">
      <app-card
        text="Agendamento"
        descricao="Agendamentos feitos"
        button="Acessar"
        url="adm/agendamento"
      ></app-card>
    </div>
  </div>
</div>`,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
