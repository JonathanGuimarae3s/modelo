import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  template: `<!-- <div class="container">
  <div class="card">
    <div class="card-body">
      <h4>Login</h4>

      <form #f="ngForm" (ngSubmit)="send(f)">

        <app-input name="Senha" [(ngModel)]="datas.password" type="password ">
        </app-input>
      </form>
      <app-button text="Entrar"></app-button>
    </div>
  </div>
</div> -->

<main class="m-auto d-flex flex-column align-items-center">
  <div
    id="container-form"
    class="m-auto d-flex flex-column align-items-center rounded bg-light"
  >
    <h4>Login</h4>
    <form
      #f="ngForm"
      (ngSubmit)="send(f)"
      class="d-flex justify-content-center align-items-center flex-column"
    >
      <div class="mb-3">
        <label for="Email" class="form-label">Email</label>
        <input
        [(ngModel)]="datas.email"
          type="text"
          name="email"
          class="form-control"
          id=""
          aria-describedby="helpId"
          placeholder="Insira seu email"
        />
      </div>
      <div class="mb-3">
        <label for="senha" class="form-label">Senha</label>
        <input
       [(ngModel)]="datas.password"
          type="password"
          name="senha"
          class="form-control"
          id=""
          aria-describedby="helpId"
          placeholder="Insira sua senha"
        />
      </div>

      <p class="text-start text-danger">{{msg}}</p>
      <p class="text-start">Esqueceu a senha?</p>

      <button type="button" class="btn btn-primary" type="ngSubmit">
        Entrar
      </button>
    </form>
    <a class="nav-link links mt-3" href="index.html">
      <h6>
        <b> Retornar ao site</b>
      </h6>
    </a>
  </div>
</main>
`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected msg: string = '';
  public datas = {
    email: '',
    password: '',
  };
  constructor(private route: Router) { }
  send(form: NgForm) {
    const values = form.value;

    if (values.email == 'senac@gmail.com' && values.senha == 'senac@123') {
      this.route.navigate(['adm/dashboard']);
    } else {
      this.msg = 'Dados inválidos';
    }
  }

}
