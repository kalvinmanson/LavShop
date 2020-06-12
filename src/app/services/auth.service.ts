import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  check() {
    return this.auth.authState;
  }
  login() {
    return this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    return this.auth.signOut();
  }
}
