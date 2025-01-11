import { Component, OnInit } from '@angular/core';
import * as data from '../form-three.json';

@Component({
  selector: 'app-form-material',
  templateUrl: './form-material.component.html',
  styleUrls: ['./form-material.component.css']
})
export class FormMaterialComponent implements OnInit {
 
  form: any = (data as any).default;
  constructor() { }
  rendered = false;
  data = {};
  
  ngOnInit(): void {
  }
  onSubmit () {
    console.log('Form rendered!');
    this.rendered = true;
  }
}
