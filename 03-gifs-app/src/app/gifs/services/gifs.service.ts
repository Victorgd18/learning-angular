import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'VwkTmL24bLlFcyFs5DolGBvZ6FDreviC';
  private serviceUrl: string = 'http://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
   }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.trim().toLowerCase();
    if (this._tagsHistory.includes(tag)) return;
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history',JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage(): void {
    const history = localStorage.getItem('history');
    if (history) {
      this._tagsHistory = JSON.parse(history);
    }
    if(this._tagsHistory.length > 0) {
      this.searchTag(this._tagsHistory[0]);
    }
  }

  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
        // console.log({gifs: this.gifList})
      })

    // fetch('http://api.giphy.com/v1/gifs/search?api_key=VwkTmL24bLlFcyFs5DolGBvZ6FDreviC&q=naruto&limit=10')
    // .then( resp => resp.json())
    // .then( data => console.log(data))

  }

}
