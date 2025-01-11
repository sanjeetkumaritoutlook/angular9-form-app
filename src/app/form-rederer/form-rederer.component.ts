import { Component, OnInit } from '@angular/core';
import * as datas from '../form.json';
@Component({
  selector: 'app-form-rederer',
  templateUrl: './form-rederer.component.html',
  styleUrls: ['./form-rederer.component.css']
})
export class FormRedererComponent implements OnInit {
  // form = '';
  // customForm: any = (datas as any).default;
 
  // data = {};
  // rendered = false;
  constructor() { }

  ngOnInit(): void {
    // this.form = this.getUrlQuery('form');
  }
  
  // getUrlQuery (key) {
    
  //   let query = {};
  //   location.search.substr(1).split("&").forEach(function(item) {
  //     query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
  //   });
  //   return key ? query[key] : query;
  // }

  // onRendered () {
  //   console.log('Form rendered!');
  //   this.rendered = true;
  // }
  // onChange(event) {
  //   console.log('Submission changed!', event);
  //   if (event.data) {
  //     this.data = event.data;
  //   }
  // }
 

}
