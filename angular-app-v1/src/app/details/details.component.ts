import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  displayParagraph = false;
  btnText = "Display Details";
  clickCounter: number = 0;
  clickCounterArray = [];

  constructor() { }

  onBtnClickToggleParagraph() {
    if (!this.displayParagraph) {
      this.displayParagraph = true;
      this.btnText = "Hide Details";
      // this.clickCounterArray.push(this.clickCounter++);
      this.clickCounterArray.push(new Date());
    }
    else {
      this.displayParagraph = false;
      this.btnText = "Display Details";
      // this.clickCounterArray.push(this.clickCounter++);
      this.clickCounterArray.push(new Date());
    }
  }

  isDisplayParagraph() {
    return this.displayParagraph === true ? 'block' : 'none';
  }

  ngOnInit() {
  }

}
