import { Component } from '@angular/core';
import {Developers} from '../developers-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';

  public giorgi: any = Developers[0]
  public mariami: any = Developers[1]
  public ana: any = Developers[2]
  
}
