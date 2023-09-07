import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent {

constructor(private auth: AngularFireAuth) {}

  public email: string = '';
  public password: string = '';

  signIn() {
    if (this.email && this.password) {
        this.auth.signInWithEmailAndPassword(this.email, this.password)
        .then((userCredentials) => {
          this.email = '';
          this.password = '';
          console.log(`User signed in: ${userCredentials.user?.email}`);
        })
        .catch(err => {
          alert(err.message);
        })
    } else {
      alert("Enter Email and Password!");
    }
  }

}
