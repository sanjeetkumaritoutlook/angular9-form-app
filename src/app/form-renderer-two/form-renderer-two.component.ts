import { Component, OnInit } from '@angular/core';
import sample from '../form-two.json';
@Component({
  selector: 'app-form-renderer-two',
  templateUrl: './form-renderer-two.component.html',
  styleUrls: ['./form-renderer-two.component.css']
})
export class FormRendererTwoComponent implements OnInit {
  customForms = sample;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event) {
    alert('form submitted!')
  }
}
