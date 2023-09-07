import { Component } from '@angular/core';
import {Developers} from '../../../developers-data';
import { DataService } from '../../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'angular-project';

  public giorgi: any = Developers[0];
  public mariami: any = Developers[1];
  public ana: any = Developers[2];

  constructor(private dataService: DataService) { }

  onButton1Click() {
    this.dataService.setSharedProperty(this.giorgi);
  }

  onButton2Click() {
    this.dataService.setSharedProperty(this.mariami);
  }

  onButton3Click() {
    this.dataService.setSharedProperty(this.ana);
  }
    
}
