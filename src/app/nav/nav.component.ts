import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  // Facebook

  public faceImageUrl: string = "assets/facebook-svgrepo-com.svg";

  faceMouseEnter() {
    this.faceImageUrl = "assets/facebook-primary.svg";
  }

  faceMouseLeave() {
    this.faceImageUrl = "assets/facebook-svgrepo-com.svg";
  }

  // Instagram

  public instaImgUrl: string = "assets/instagram-round-svgrepo-com.svg";

  instaMouseEnter() {
    this.instaImgUrl = "assets/insta-primary.svg";
  }

  instaMouseLeave() {
    this.instaImgUrl = "assets/instagram-round-svgrepo-com.svg";
  }

  // Github

  public gitImgUrl: string = "assets/github-142-svgrepo-com.svg";

  gitMouseEnter() {
    this.gitImgUrl = "assets/github-primary.svg";
  }

  gitMouseLeave() {
    this.gitImgUrl = "assets/github-142-svgrepo-com.svg";
  }
}
