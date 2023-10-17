import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';



import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


 // Verifique se o caminho da URL é "/login"
if (window.location.pathname === "/login") {
  // Se o caminho for "/login", adicione a classe "bg-dark" ao elemento "body"
  document.body.classList.add("bg-dark");
}

