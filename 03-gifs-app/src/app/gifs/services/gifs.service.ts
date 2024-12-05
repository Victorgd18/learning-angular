import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.trim().toLowerCase();
  }

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);
    this._tagsHistory.unshift(tag);
    console.log(this._tagsHistory);

  }

}
