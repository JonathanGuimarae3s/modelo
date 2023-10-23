import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Lesson } from 'src/app/model/interface/lesson/lesson';
import { LessonService } from 'src/app/model/service/lesson/lesson.service';
@Component({
  selector: 'app-cursos',
  template: `<div class="container">
  <h1>Cursos</h1>


  <div class="container">
    <div class="my-5"><h4>Tarde</h4></div>
    <div
      class="row row-cols-1 row-cols-md-2 g-4"
      *ngFor="let lesson of lessons"
    >
      <div class="col" *ngIf="lesson.period === 'Tarde'">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ lesson.nameLesson }}</h5>
            <p class="card-text">Segmento: {{ lesson.segment }}</p>
            <p class="card-text">
              Quantidade de vagas para agendar: {{ lesson.students }}
            </p>
            <p>Horário: {{ lesson.startTime }} às {{ lesson.endTime }}</p>
          </div>

          <div class="d-flex justify-content-around">
            <button type="button" class="btn btn-secondary" (click)="update(lesson.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                ></path>
              </svg>
              Editar
            </button>
            <button type="button" class="btn btn-outline-danger" (click)="delete(lesson.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
                ></path>
                <path
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
                ></path>
              </svg>
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
`,
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  lessons: Lesson[] = [];

  constructor(private service: LessonService, private router: Router) { }

  ngOnInit(): void {
    this.readLesson();
  }
  update(id: any) {
    this.router.navigate(['cursos/' + id])
  }
  delete(id: any) {
    try {
      this.service.delete(id).subscribe((response) => {
      })
      this.router.navigate(['cursos']);

    } catch (error) {

    }

  }
  readLesson() {


    this.service.getAll().subscribe((response) => {

      this.lessons = response;
    });
  }

}
