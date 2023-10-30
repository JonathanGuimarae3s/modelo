import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LessonService } from 'src/app/model/service/lesson/lesson.service';

import { SchedulingService } from 'src/app/model/service/scheduling/scheduling.service';
import { Lesson } from 'src/app/model/interface/lesson/lesson';
import { Scheduling } from 'src/app/model/interface/scheduling/scheduling';
import { TypeModifier } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-agendamento',
  template: `<div class="container my-5 bg-white">
  <h3 class="titulo3">Agendamentos</h3>
  <a href="adm/dashboard" class="nav nav-link"><h6>Voltar</h6></a>
  <div>
    <h4>Manhã</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Turma</th>
          <th scope="col">Data</th>
          <th scope="col">Cliente</th>
          <th scope="col">Idade</th>
          <th scope="col">Responsável</th>
          <th scope="col">Celular</th>
          <th scope="col">Código de Confirmação</th>
        </tr>
      </thead>
      <tbody *ngFor="let sched of schedulings">
        <tr *ngIf="sched.period == 'Manha'">
          <td scope="row">{{ sched.nameLesson }}</td>
          <td>{{ sched.date }}</td>
          <td>{{ sched.nameClient }}</td>
          <td>{{ sched.age }}</td>
          <td>{{ sched.responsible }}</td>
          <td>{{ sched.phoneNumber }}</td>
          <td>{{ sched.confirmationCode }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <h4>Tarde</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Turma</th>
          <th scope="col">Data</th>
          <th scope="col">Cliente</th>
          <th scope="col">Idade</th>
          <th scope="col">Responsável</th>
          <th scope="col">Celular</th>
          <th scope="col">Código de Confirmação</th>
        </tr>
      </thead>
      <tbody *ngFor="let sched of schedulings">
        <tr *ngIf="sched.period == 'Tarde'">
          <td scope="row">{{ sched.nameLesson }}</td>
          <td>{{ sched.date }}</td>
          <td>{{ sched.nameClient }}</td>
          <td>{{ sched.age }}</td>
          <td>{{ sched.responsible }}</td>
          <td>{{ sched.phoneNumber }}</td>
          <td>{{ sched.confirmationCode }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <h4>Noite</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Turma</th>
          <th scope="col">Data</th>
          <th scope="col">Cliente</th>
          <th scope="col">Idade</th>
          <th scope="col">Responsável</th>
          <th scope="col">Celular</th>
          <th scope="col">Código de Confirmação</th>
        </tr>
      </thead>
      <tbody *ngFor="let sched of schedulings">
        <tr *ngIf="sched.period == 'Noite'">
          <td scope="row">{{ sched.nameLesson }}</td>
          <td>{{ sched.date }}</td>
          <td>{{ sched.nameClient }}</td>
          <td>{{ sched.age }}</td>
          <td>{{ sched.responsible }}</td>
          <td>{{ sched.phoneNumber }}</td>
          <td>{{ sched.confirmationCode }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  protected date: Date = new Date();
  protected today: string =
    `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`;

  schedulings: any = [];
  constructor(private lessonService: LessonService, private schedulingService: SchedulingService) { }

  ngOnInit() {



    this.schedulingService.getAll().subscribe((response) => {
      this.schedulings = response
    });

  }



}
