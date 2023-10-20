import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button

  class="btn btn-secondary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
  style="margin-top: 7px">
  {{ text }}
</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() public text: string = '';

ngOnInit(): void {
  
}
}
