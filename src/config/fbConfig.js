import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  getUserConfig = uid => {
    return new Promise((resolve, reject) => {
      this.db
        .collection('weatherConfig')
        .doc(`${uid}`)
        .get()
        .then(doc => {
          if (doc.exists) {
            return resolve(doc.data());
          } else {
            console.log('Document not found');
            return reject(null);
          }
        })
        .catch(err => reject(err));
    });
  };

  saveUserConfig = (uid, config) => {
    this.db
      .collection('weatherConfig')
      .doc(`${uid}`)
      .set(config)
      .then(() => 'Success')
      .catch(err => err);
  };

  deleteUserConfig = uid => {
    return new Promise((resolve, reject) => {
      this.db
        .collection('weatherConfig')
        .doc(`${uid}`)
        .delete()
        .then(() => resolve('Success'))
        .catch(err => reject(err));
    });
  };
}

export default Firebase;
