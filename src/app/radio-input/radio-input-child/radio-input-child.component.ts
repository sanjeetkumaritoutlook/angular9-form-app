import { Component, OnInit ,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-input-child',
  templateUrl: './radio-input-child.component.html',
  styleUrls: ['./radio-input-child.component.css']
})
export class RadioInputChildComponent implements OnInit {
  @Input() item = '';
  @Output() eventFromChild: EventEmitter<boolean>= new EventEmitter<boolean>();
  setExistingFlows(v){
    this.eventFromChild.emit(v);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
