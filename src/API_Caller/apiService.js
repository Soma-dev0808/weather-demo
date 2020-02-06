import axios from 'axios';

/**
 * connecting with line notify
 * @returns {function(*)}
 */
export function lineAuth(
  uid,
  zipcode,
  country,
  { selectedHour, selectedMinute }
) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND}/line-notify/token/${uid}/${zipcode}/${country}/${selectedHour}/${selectedMinute}`
      )
      .then(({ data }) => {
        if (data) {
          return resolve(data);
        }
      })
      .catch(err => {
        return reject(err);
      });
  });
}

/**
 * Stop cronjob
 * @return {function(*)}
 */
export function cancelJob(uid, firebase) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/line-notify/notify/cancel/${uid}`)
      .then(res => {
        firebase
          .deleteUserConfig(uid)
          .then(() => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => reject(err));
  });
}
