import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cursos-add',
  templateUrl: './cursos-add.component.html',
  styleUrls: ['./cursos-add.component.css']
})
export class CursosAddComponent {
  protected endTime = '';
  protected startTime: string = '';
  protected datas = {
    segment: '',
    period: '',
    professor: '',
    students: '',
    institution_id: '',
    time: `${this.startTime} ás ${this.endTime}`,
  }
  send(form: NgForm) { }

}
