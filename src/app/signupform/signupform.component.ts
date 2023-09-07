import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})

export class SignupformComponent {

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    ) {}

  public fname: string = '';
  public lname: string = '';
  public email: string = '';
  public password: string = '';
  public repeatPassword: string = '';

  
  signUp() {
    if (this.email && this.password) {
      if (!(this.password == this.repeatPassword)) {
        alert("Passwords do not match!");
        return;
      }
      this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredentials) => {
        // log the registration 
        this.email = '';
        this.password = '';
        alert(`User signed up: ${userCredentials.user?.email}`);
        this.router.navigate(['/signin']);
      })
      .catch((err) => {
        alert("Error Signing up: " + err.message);
      })
    } else {
      alert("Enter email and password!");
    }
  }

  sendUser() {

  }

}
