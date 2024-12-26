import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,

  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //  i18n Select
  public name: string = 'Victor';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] = ['Victor', 'Melissa', 'Juan', 'Pedro', 'Ana', 'Maria'];
  public clientsMap = {
    '=0': 'no hay ningún cliente esperando.',
    '=1': 'hay un cliente esperando.',
    'other': 'hay # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Victor',
    age: 24,
    address: 'Calle 123'
  }

  // Async Pipe
  public myObservableTimer = interval(2000);

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3000);
  })
}
