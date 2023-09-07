import { Component, Input } from '@angular/core';
import { Developers } from '../../developers-data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() public name: string = "";
  @Input() public imgUrl: string = "";
  @Input() public description: string = "";

  public selectedDeveloper: any;
  setSelectedDeveloper(developerIndex: number) {
    this.selectedDeveloper = Developers[developerIndex];
  }

}
