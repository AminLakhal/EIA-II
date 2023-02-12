namespace Endabgabe {

    export class Particle {
        x: number;
        y: number;
        speed: number;
        direction: number;
        color: string;
      
        constructor(x: number, y: number, speed: number, direction: number, color: string) {
          this.x = x;
          this.y = y;
          this.speed = speed;
          this.direction = direction;
          this.color = color;
        }

        move() {
            this.x += Math.cos(this.direction) * this.speed;
            this.y += Math.sin(this.direction) * this.speed;
          }
        
          draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, 5, 5);
          }
        }


}