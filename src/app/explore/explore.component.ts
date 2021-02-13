import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  chars;
  particles;
  canvas;
  ctx;
  w;
  h;
  current;
  duration = 5000;
  str = ['Happy', 'Birthday', 'To', 'Dear', 'Yug'];

  constructor() {
    this.init();
    this.resize();
    requestAnimationFrame(this.render);
    addEventListener('resize', this.resize);
  }

  ngOnInit(): void {
  }


  makeChar(c): any[] {
    const tmp = document.createElement('canvas');
    const size = tmp.width = tmp.height = this.w < 400 ? 200 : 300;
    const tmpCtx = tmp.getContext('2d');
    tmpCtx.font = 'bold ' + size + 'px Arial';
    tmpCtx.fillStyle = 'white';
    tmpCtx.textBaseline = 'middle';
    tmpCtx.textAlign = 'center';
    tmpCtx.fillText(c, size / 2, size / 2);
    const char2 = tmpCtx.getImageData(0, 0, size, size);
    const char2particles = [];
    for (let i = 0; char2particles.length < this.particles; i++) {
      const x = size * Math.random();
      const y = size * Math.random();
      // tslint:disable-next-line:radix
      const offset = parseInt(String(y)) * size * 4 + parseInt(String(x)) * 4;
      if (char2.data[offset]) {
        char2particles.push([x - size / 2, y - size / 2]);
      }
    }
    return char2particles;
  }

  init(): void {
    this.canvas = document.createElement('canvas');
    document.body.append(this.canvas);
    document.body.style.margin = String(0);
    document.body.style.overflow = 'hidden';
    document.body.style.background = 'black';
    this.ctx = this.canvas.getContext('2d');
  }

  resize(): void {
    this.w = this.canvas.width = innerWidth;
    this.h = this.canvas.height = innerHeight;
    this.particles = innerWidth < 400 ? 55 : 99;
  }

  makeChars(t): void {
    // tslint:disable-next-line:radix
    const actual = parseInt(String(t / this.duration)) % this.str.length;
    if (this.current === actual) {
      return;
    }
    this.current = actual;
    this.chars = [...(this.str)[actual]].map(this.makeChar);
  }

  render(t) {
    this.makeChars(t);
    requestAnimationFrame(this.render);
    this.ctx.fillStyle = '#00000010';
    this.ctx.fillRect(0, 0, this.w, this.h);
    this.chars.forEach((pts, i) => this.firework(t, i, pts));
  }

  firework(t, i, pts): void {
    t -= i * 200;
    // tslint:disable-next-line:radix
    const id = i + this.chars.length * parseInt(String(t - t % this.duration));
    t = t % this.duration / this.duration;
    let dx = (i + 1) * this.w / (1 + this.chars.length);
    dx += Math.min(0.33, t) * 100 * Math.sin(id);
    let dy = this.h * 0.5;
    dy += Math.sin(id * 4547.411) * this.h * 0.1;
    if (t < 0.33) {
      this.rocket(dx, dy, id, t * 3);
    } else {
      this.explosion(pts, dx, dy, id, Math.min(1, Math.max(0, t - 0.33) * 2));
    }
  }

  rocket(x, y, id, t): void {
    this.ctx.fillStyle = 'white';
    const r = 2 - 2 * t + Math.pow(t, 15 * t) * 16;
    y = this.h - y * t;
    this.circle(x, y, r);
  }

  explosion(pts, x, y, id, t): void {
    const dy = (t * t * t) * 20;
    let r = Math.sin(id) * 1 + 3;
    r = t < 0.5 ? (t + 0.5) * t * r : r - t * r;
    this.ctx.fillStyle = `hsl(${id * 55}, 55%, 55%)`;
    pts.forEach((xy, i) => {
      if (i % 20 === 0) {
        this.ctx.fillStyle = `hsl(${id * 55}, 55%, ${55 + t * Math.sin(t * 55 + i) * 45}%)`;
      }
      this.circle(t * xy[0] + x, this.h - y + t * xy[1] + dy, r);
    });
  }

  circle(x, y, r): void {
    this.ctx.beginPath();
    this.ctx.ellipse(x, y, r, r, 0, 0, 6.283);
    this.ctx.fill();
  }

}
