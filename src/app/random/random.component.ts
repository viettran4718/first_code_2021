import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  numberRd;

  arrNum: number[] = [];

  selectedArrNum: number[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  getRandomArr(): void {
    this.arrNum = [];
    this.selectedArrNum = [];
    for (let i = 1; i <= this.numberRd; i++) {
      this.arrNum.push(i);
      this.arrNum.push(i);
    }
  }

  getNumber(): void {
    if (this.arrNum.length > 0) {
      const selectedIndex = this.getRndIntegerFromZero(this.arrNum.length);
      const selectNumber = this.arrNum[selectedIndex];
      this.arrNum.splice(selectedIndex, 1);

      this.selectedArrNum.push(selectNumber);

    }

  }

  getRndInteger(min, max): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRndIntegerFromZero(numberInt): number {
    return Math.floor(Math.random() * numberInt);
  }

}
