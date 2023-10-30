import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LessonService } from 'src/app/model/service/lesson/lesson.service';

@Component({
  selector: 'app-cursos-add',
  template: `<div class="container bg-white my-5 p-4">
  <h4>Cadastrar um novo curso</h4>
  <a href="adm/dashboard" class="nav nav-link"><h6>Voltar</h6></a>
  <form #f="ngForm" (ngSubmit)="send(f)">

    <div class="mb-3">
      <label class="form-label">Nome do curso</label>
      <input
        [(ngModel)]="datas.nameLesson"
        name="nameLesson"
        class="form-control"
        id=""
        aria-describedby="helpId"
        placeholder="Nome do curso"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Segmento do curso</label>
      <input
        [(ngModel)]="datas.segment"
        name="segment"
        class="form-control"
        id=""
        aria-describedby="helpId"
        placeholder="Barbeiro ou Beleza"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Turno do curso</label>
      <input
        [(ngModel)]="datas.period"
        name="period"
        class="form-control"
        id=""
        aria-describedby="helpId"
        placeholder="Diurno, vespertino ou noturno"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Profissional responsável</label>
      <input
        [(ngModel)]="datas.professor"
        name="professor"
        class="form-control"
        id=""
        aria-describedby="helpId"
        placeholder="Professor responsável"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Quantidade de estudantes</label>
      <input
        [(ngModel)]="datas.students"
        type="number"
        name="students"
        class="form-control"
        id=""
        aria-describedby="helpId"
        placeholder="Quantidade de estudantes"
      />
    </div>

    <div class="mb-3">
      <label class="form-label">Horário de início</label>
      <input
        [(ngModel)]="datas.startTime"
        type="number"
        name="startTime"
        class="form-control"
        id=""
        aria-describedby="helpId"
        placeholder="Hora que inicia a aula"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Horário de termino</label>
      <input
        [(ngModel)]="datas.endTime"
        type="number"
        name="endTime"
        class="form-control"
        id=""
        aria-describedby="helpId"
        placeholder="Hora que encerra a aula"
      />
    </div>

    <button class="btn btn-outline-secondary">Cadastrar</button>
  </form>
</div>
`,
  styleUrls: ['./cursos-add.component.css']
})
export class CursosAddComponent {
  protected datas = {
    nameLesson: '',
    segment: '',
    period: '',
    professor: '',
    students: '',
    endTime: '',
    startTime: '',
    institution_id: 1,

  }
  constructor(private service: LessonService, private router: Router) { }
  send(form: NgForm) {
    const lesson = form.value;
    console.log(lesson)
    return this.service.create(lesson).subscribe((response) => {

      this.router.navigate(['adm/cursos']);
    })
  }

}
