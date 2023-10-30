import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `<div class="container-fluid position-relative p-0">
  <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
    <a href="" class="navbar-brand p-0">
      <h1 class="text-primary m-0">Modelo</h1>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="fa fa-bars"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto py-0">
        <a href="index.html" class="nav-item nav-link active">Home</a>
        <a [routerLink]="'/belezafeminina'" class="nav-item nav-link">Beleza Feminina</a>
        <a [routerLink]="'/barbearia'" class="nav-item nav-link">Barbearia</a>
        <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            >Unidades</a
          >
          <div class="dropdown-menu m-0">
            <a [routerLink]="'/destination'" class="dropdown-item"
              >Casa do Menor S.M.A</a
            >
            <a [routerLink]="'/booking'" class="dropdown-item"
              >Instituto Embelleze
            </a>
            <a [routerLink]="'/team'" class="dropdown-item">Senac N.I</a>
          </div>
        </div>
        <a href="contact.html" class="nav-item nav-link">Galeria</a>
      </div>

    </div>
  </nav>

  <div class="container-fluid bg-primary py-5 mb-5 hero-header">
    <div class="container py-5">
      <div class="row justify-content-center py-5">
        <div class="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Torne-se um <span class="text-primary">Modelo</span>
          </h1>
          <p class="fs-4 text-white mb-4 animated slideInDown">{{ frase }}</p>
          <div class="position-relative w-75 mx-auto animated slideInDown">
            <input
              class="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Busque a unidade mais próxima de você:"
            />
            <app-button text="Pesquisar"></app-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public frase: string = 'Descubra a beleza em sua forma mais pura com a Modelo: onde o estilo se encontra com a gratuidade, tornando a sua transformação pessoal ainda mais deslumbrante!';
}
