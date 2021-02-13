import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Set the date we're counting down to
  countDownDate = new Date('Feb 13, 2021 00:00:00').getTime();

  remaining = '';
  title = 'viettran-app';
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() {
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

      // Display the result in an element with id="demo"
      this.remaining = this.days + 'd ' + this.hours + 'h ' + this.minutes + 'm ' + this.seconds + 's ';

      // If the count down is finished, write some text
      if (distance < 0) {
        this.remaining = 'EXPIRED';
      }
    }, 1000);
  }

}
