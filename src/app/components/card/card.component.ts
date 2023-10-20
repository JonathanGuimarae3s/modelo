import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  template: `<div class="card">
  <div class="card-body">
    <h5 class="card-title">{{ text }}</h5>
    <p class="card-text">{{ descricao }}</p>
  </div>
  <button
    type="button"
    (click)='redirectPage(this.url)'

    class="btn btn-primary"
    type="ngSubmit"
  >
    {{ button }}
  </button>
</div>
`,
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() public text: string = '';
  @Input() public descricao: string = '';
  @Input() public button: string = '';
  @Input() public url: string = '';



  constructor(private router: Router) { }
  redirectPage(url: any) {
    this.router.navigateByUrl(url);

  }

}
