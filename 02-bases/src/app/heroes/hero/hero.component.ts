import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public cambio: boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeHero(): void {
    this.name = 'batman';
    this.cambio = true;
  }

  changeAge(): void {
    this.age = 32;
    this.cambio = true;

  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
    this.cambio = false;
  }
}
