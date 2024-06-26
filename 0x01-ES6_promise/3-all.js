import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignUp() {
  return uploadPhoto()
    .then(({ body }) => {
      createUser()
        .then(({ firstName, lastName }) => {
          console.log(`${body} ${firstName} ${lastName}`);
        })
        .catch(() => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
