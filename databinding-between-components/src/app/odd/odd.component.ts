import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  // This is  property even which can be set to this component from outside.
  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

}
