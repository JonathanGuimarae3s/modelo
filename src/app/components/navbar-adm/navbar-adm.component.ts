import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-adm',
  template:`<nav class="navbar navbar-expand-sm navbar-dark bg-dark text-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="adm/dashboard"><h1>Painel administrativo</h1></a>

    <div class="d-flex my-2 my-lg-0">

      <a class="btn btn-outline-success my-2 my-sm-0" href="adm/login" >Sair</a>
    </div>
  </div>

</nav>
`,
  styleUrls: ['./navbar-adm.component.css']
})
export class NavbarAdmComponent {

}
