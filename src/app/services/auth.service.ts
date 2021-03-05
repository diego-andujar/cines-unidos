import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import  firebase from 'firebase';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private angularFireAuth: AngularFireAuth ) { }

  /**
   * Log in with Google account
   */
  async loginWithGoogle(): Promise<firebase.User> {
    try {
      const response = await this.angularFireAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      const { user } = response;
      localStorage.setItem('user', user.uid);
      return user;
    } catch (err) {
      console.log(err);
      localStorage.removeItem('user');
      return null;
    }
  }


  /**
   * Sign in using an email and a password
   * @param email
   * @param password
   */
  async signInWithEmail(
    email: string,
    password: string
  ): Promise<firebase.User> {
    try {
      const response = await this.angularFireAuth.signInWithEmailAndPassword(email, password);
      const { user } = response;
      localStorage.setItem('user', user.uid);
      return user;
    } catch (err) {
      console.log(err);
      localStorage.removeItem('user');
      return null;
    }
  }

  /**
   * REGISTER USING EMAIL AND PASSWORD
   * @param email
   * @param password
   */
  async signUpWithEmail(
    displayName: string,
    email: string,
    password: string
  ): Promise<firebase.User> {
    try {
      const response = await this.angularFireAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = response;
      localStorage.setItem('user', user.uid);
      // Setting up user name and last name
      const actualUser: any = user;
      await actualUser.updateProfile({
        displayName,
        photoURL:
          'https://support.grasshopper.com/assets/images/care/topnav/default-user-avatar.jpg',
      });
      return actualUser;
    } catch (err) {
      localStorage.removeItem('user');
      return null;
    }
  }

  /**
   * GET CURRENT LOGGED IN USER
   */
  getCurrentUser(): Observable<firebase.User> {
    const actualUser: any = this.angularFireAuth.user;
    return actualUser;
  }

  /**
   * LOGOUT FUNCTION
   */
  async logout(): Promise<void> {
    try {
      await this.angularFireAuth.signOut();
      localStorage.removeItem('user');
    } catch (e) {
      localStorage.removeItem('user');
    }
  }

  /**
   * GET THE USER AUTHENTICATION STATUS
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('user') ? true : false;
  }
}
