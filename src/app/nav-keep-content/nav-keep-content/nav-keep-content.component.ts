import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-keep-content',
  templateUrl: './nav-keep-content.component.html',
  styleUrls: ['./nav-keep-content.component.css']
})
export class NavKeepContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active = 1;

  next = ()=> {
    if(this.active < 3) this.active = this.active + 1; 
  }

  previous = ()=> {
    if(this.active > 1) this.active = this.active - 1; 
  }

  submit = () => {
    console.log(this.active);
  }
}
