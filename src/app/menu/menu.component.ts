import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('slideDown', [
      state('void', style({ height: '0', opacity: 0 })),
      state('*', style({ height: '*', opacity: 1 })),
      transition('void => *', animate('200ms ease-in')),
      transition('* => void', animate('200ms ease-out')),
    ]),
  ],
})
export class MenuComponent {

  // Web Image
  public webImageUrl: string = "assets/web-dark.svg";

  webMouseEnter() {
    this.webImageUrl = "assets/web-primary.svg"
  }

  webMouseLeave() {
    this.webImageUrl = "assets/web-dark.svg"
  }

  // Software Image

  public softImageUrl: string = "assets/soft-black.svg";

  softMouseEnter() {
    this.softImageUrl = "assets/soft-primary.svg"
  }

  softMouseLeave() {
    this.softImageUrl = "assets/soft-black.svg"
  }

  // Linux Image

  public linuxImageUrl: string = "assets/linux-black.svg";

  linuxMouseEnter() {
    this.linuxImageUrl = "assets/linux-primary.svg"
  }

  linuxMouseLeave() {
    this.linuxImageUrl = "assets/linux-black.svg"
  }

  // Mobile Image

  public mobImageUrl: string = "assets/mob-black.svg";

  mobMouseEnter() {
    this.mobImageUrl = "assets/mob-primary.svg"
  }

  mobMouseLeave() {
    this.mobImageUrl = "assets/mob-black.svg"
  }


  public isToggled: boolean = false;
  
  Toggle() {
    this.isToggled = !this.isToggled
  }
}
