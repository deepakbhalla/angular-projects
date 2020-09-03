import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  // This is  property even which can be set to this component from outside.
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }
}
