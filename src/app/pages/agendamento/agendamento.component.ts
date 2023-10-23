import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LessonService } from 'src/app/model/service/lesson/lesson.service';

import { SchedulingService } from 'src/app/model/service/scheduling/scheduling.service';
import { Lesson } from 'src/app/model/interface/lesson/lesson';
import { Scheduling } from 'src/app/model/interface/scheduling/scheduling';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-agendamento',
  template: `
  <div class="container">
  <h3 class="titulo3">Agendamentos</h3>
  <h4>Manhã</h4>

  <div *ngFor="let scheduling of this.schedulings">
    <table class="table"  *ngIf="scheduling.period === 'Manha'">
      <thead>
        <tr>
          <th scope="col">{{scheduling.period}}</th>
          <th scope="col">Cliente</th>
          <th scope="col">Cliente</th>
          <th scope="col">Cliente</th>
          <th scope="col">Cliente</th>
          <th scope="col">Cliente</th>
          <th scope="col">Data</th>
          <th scope="col">Codigo de Confirmação</th>
        </tr>
      </thead>
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

  public schedulings: any = [];
  constructor(private lessonService: LessonService, private schedulingService: SchedulingService) { }

  ngOnInit() {


    this.schedulingService.getAll().subscribe((response) => {
      this.schedulings = response;
      console.log(this.schedulings);
    })
  }
}
