import { createUser, uploadPhoto } from './utils.js';

export default function handleProfileSignup() {
  let user;
  let firstName;
  let lastName;

  return Promise.all([uploadPhoto(), createUser()])
    .then((res) => {
      user = res[0].body;
      firstName = res[1].firstName;
      lastName = res[1].lastName;
    })
    .catch(() => { console.log('Signup system offline'); });
}
