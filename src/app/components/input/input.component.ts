import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {

  @Input() public type: string = '';
  @Input() public name: string = '';
  @Input() public model: string = '';
  @Input() public placeholder: string = '';


}
