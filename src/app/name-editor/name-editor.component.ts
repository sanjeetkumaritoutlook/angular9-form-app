import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
//Reactive forms are built around observable streams, where form inputs and values
// are provided as streams of input values, which can be accessed synchronously.
  name = new FormControl('');  //set its initial value, which in this case is an empty string

  constructor() { }
  updateName() {
    this.name.setValue('Nancy');
  }
  ngOnInit(): void {
  }

}
