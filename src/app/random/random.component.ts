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

  resultCouple = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getRandomArr(): void {
    if (this.arrNum.length === 0) {
      this.initData();
    } else if (confirm('Bạn muốn reset lượt chọn?')) {
      this.initData();
    }
  }

  initData(): void {
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

  getCouple(): void {

    const arrCouple: number[] = [];

    for (let i = 1; i <= this.numberRd; i++) {
      arrCouple.push(i);
    }

    const selectedArrCouple: number[] = [];
    while (arrCouple.length !== 0) {
      const selectedIndex = this.getRndIntegerFromZero(arrCouple.length);
      const selectNumber = arrCouple[selectedIndex];
      arrCouple.splice(selectedIndex, 1);
      selectedArrCouple.push(selectNumber);
    }

    this.resultCouple = '';

    for (let i = 0; i < selectedArrCouple.length / 2; i++) {
      this.resultCouple += selectedArrCouple[2 * i] + '     ><     ' + selectedArrCouple[2 * i + 1] + '\n';
    }
  }

}
