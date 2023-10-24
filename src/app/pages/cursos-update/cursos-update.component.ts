import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from 'src/app/model/interface/lesson/lesson';
import { LessonService } from 'src/app/model/service/lesson/lesson.service';

@Component({
  selector: 'app-cursos-update',
  template: `<div class="container">
  <h4>Editar um  curso</h4>
  <form #f="ngForm" (ngSubmit)="send(f)">
    <input
      type="text"
      [(ngModel)]="datas.institution_id"
      name="institution_id"
      value="1"
      id="institution"
    />
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

    <button class="btn btn-outline-secondary">Atualizar</button>
  </form>
</div>
`,
  styleUrls: ['./cursos-update.component.css']
})
export class CursosUpdateComponent implements OnInit {
  @Input() lesson!: Lesson;
  protected datas = {
    id: '',
    nameLesson: '',
    segment: '',
    period: '',
    professor: '',
    students: '',
    endTime: '',
    startTime: '',
    institution_id: '',

  }



  constructor(private service: LessonService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getLessonById(id).subscribe(
      (response: Lesson) => {
        this.datas = response;
      }
    )
  }
  protected send(form: NgForm) {
    this.service.update(this.datas, this.datas.id).subscribe((response) => {
      this.router.navigate(['cursos'])
    })


  }
}
