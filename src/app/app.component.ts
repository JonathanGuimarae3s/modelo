import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'modelo';
  protected currentUrl: string = '';
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.currentUrl = e.url;
      }
    })

  }
}
