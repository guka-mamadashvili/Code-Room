import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private localStorageKey = 'sharedProperty';
  
  constructor() { }

  setSharedProperty(data: any) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  }

  getSharedProperty() {
    const storedData = localStorage.getItem(this.localStorageKey);
    return storedData ? JSON.parse(storedData) : null;
  }
}
