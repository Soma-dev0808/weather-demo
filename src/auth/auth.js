class Auth {
  // sign up firestore
  signUp(userInput, props) {
    if (userInput) {
      return new Promise((resolve, reject) => {
        props.firebase
          .doCreateUserWithEmailAndPassword(userInput.email, userInput.password)
          .then(authUser => {
            console.log(authUser);
            return resolve(authUser);
          })
          .catch(err => {
            console.log(err);
            return reject(err);
          });
      });
    } else {
      return console.log('userinput empty');
    }
  }

  // sign in firestore
  signIn(userInput, props) {
    if (userInput) {
      return new Promise((resolve, reject) => {
        props.firebase
          .doSignInWithEmailAndPassword(userInput.email, userInput.password)
          .then(authUser => {
            return resolve(authUser);
          })
          .catch(err => {
            return reject(err);
          });
      });
    }
  }
}

export default new Auth();
