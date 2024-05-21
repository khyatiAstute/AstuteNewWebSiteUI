import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticleAnimationService {
  w!: number;
  h!: number;
  loopId: any;
  id: any;
  canvas!: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null = null; // Initialize ctx to null
  particles!: Particle[];

  static options = {
    particleColor: "rgba(173, 172, 172)",
    lineColor: "rgba(240, 240, 240,0.5)",
    particleAmount: 75,
    defaultRadius: .4,
    variantRadius: 4,
    defaultSpeed: .3,
    variantSpeed: .3,
    linkRadius: 145
  };

  constructor() { }

  init(): void {
    this.canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (this.canvas) {
      this.ctx = this.canvas.getContext("2d");
      if (this.ctx) {
        // Call methods if they exist
        // this.resizeReset();
        // this.initialiseElements();
        this.startAnimation();
      }
    }
  }

  // Other methods remain the same...

  startAnimation() {
    if (!this.ctx) return; // Check if ctx exists
    this.loopId = requestAnimationFrame(this.animationLoop.bind(this));
  }

  animationLoop() {
    if (!this.ctx) return; // Check if ctx exists
    // this.ctx.clearRect(0, 0, this.w, this.h);
    this.drawScene();
    this.id = requestAnimationFrame(this.animationLoop.bind(this));
  }

  drawScene() {
    if (!this.ctx) return; // Check if ctx exists
    // this.drawLine();
    // this.drawParticle();
  }

  drawLine() {
    if (!this.ctx) return; // Check if ctx exists
    for (var i = 0; i < this.particles.length; i++) {
      this.linkPoints(this.particles[i], this.particles);
    }
  }

  linkPoints(point: Particle, hubs: Particle[]) {
    if (!this.ctx) return; // Check if ctx exists
    for (var i = 0; i < hubs.length; i++) {
      var distance = this.checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
      var opacity = 1 - distance / ParticleAnimationService.options.linkRadius;
      if (opacity > 0) {
        this.ctx.lineWidth = 0.5;
        this.ctx.strokeStyle = 'rgba(173, 172, 172,0.2)';
        this.ctx.beginPath();
        this.ctx.moveTo(point.x, point.y);
        this.ctx.lineTo(hubs[i].x, hubs[i].y);
        this.ctx.closePath();
        this.ctx.stroke();
      }
    }
  }
  checkDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
}

class Particle {
  x: number;
  y: number;
  color: string;
  radius: number;
  speed: number;
  directionAngle: number;
  vector: { x: number, y: number };

  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.color = options.particleColor;
    this.radius = options.defaultRadius + Math.random() * options.variantRadius;
    this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
    this.directionAngle = Math.floor(Math.random() * 100);
    this.vector = {
      x: Math.cos(this.directionAngle) * this.speed,
      y: Math.sin(this.directionAngle) * this.speed
    };
  }

  update(): void {
    this.border();
    this.x += this.vector.x;
    this.y += this.vector.y;
  }

  border(): void {
    if (this.x >= w || this.x <= 0) {
      this.vector.x *= -1;
    }
    if (this.y >= h || this.y <= 0) {
      this.vector.y *= -1;
    }
    if (this.x > w) this.x = w;
    if (this.y > h) this.y = h;
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
  }

  draw(): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 10);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
