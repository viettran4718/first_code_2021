import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {newYearDate2021} from '../shared/constant';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})

export class CountDownComponent implements OnInit {

  countDownDate = newYearDate2021.getTime();

  isNewYear = false;
  title = 'viettran-app';
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() {
    if (new Date() > newYearDate2021) {
      this.isNewYear = true;
    } else {
      this.isNewYear = false;
    }
    setInterval(() => {

      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      const distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (this.days < 0) {
        this.days = 0;
      }
      if (this.hours < 0) {
        this.hours = 0;
      }
      if (this.minutes < 0) {
        this.minutes = 0;
      }
      if (this.seconds < 0) {
        this.seconds = 0;
      }

      // If the count down is finished, write some text
      if (distance < 0) {
        this.isNewYear = true;
      }
    }, 1000);
  }

  onAudioPlay(): void {
    // debugger;
    // this.audioPlayerRef.nativeElement.volume = 0.1;
  }

  ngOnInit(): void {
    // this.onAudioPlay();
  }

}
