import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css']
})
export class RadioInputComponent implements OnInit {
  currentItem = 'Reusing radio button';
  showOrHideDiv: boolean = false;
  someFunction(event){
    this.showOrHideDiv = event;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
