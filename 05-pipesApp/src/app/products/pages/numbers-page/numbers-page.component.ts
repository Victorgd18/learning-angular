import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  standalone: false,

  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

  public totalSells: number = 254435.4456;
  public percent: number = 0.4556;

}
