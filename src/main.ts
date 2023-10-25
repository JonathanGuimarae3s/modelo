import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';



import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// Verifique se o caminho da URL é "/login" ou começa com "/adm"
if (window.location.pathname.startsWith("/adm")) {
  // Se o caminho for "/login" ou começar com "/adm", adicione a classe "bg-dark" ao elemento "body"
  document.body.classList.add("bg-secondary");
}

