const authorization = "Bearer sk_86a1b658937bca29a9aafc4cfe05497e";

// THIS IS WHAT console.log(data) RETURNS
// {
//   "id": "4da6b9d1-2832-4acc-b622-eb04f1a6075a",
//   "name": {
//     "fullName": "Sébastien Saunier",
//     "givenName": "Sébastien",
//     "familyName": "Saunier"sun
//   },
//   "email": "seb@saunier.me",
//   "gender": "male",
//   "location": "Paris, Île-de-France, FR",
//   "timeZone": "Europe/Paris"
//   // [...]
// }

// 1. grab ids from the DOM
const form = document.querySelector("#clearbitForm");
const userInput = document.querySelector("#clearbitEmail");

// 2. Send an AJAX request to the Clearbit API using the fetch API
const findPerson = (email) => {
  const url = `https://person.clearbit.com/v1/people/email/${email}`;
  fetch(url, { headers: { Authorization: authorization }})
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
    injectData(data);
  });
};

// 3. Add listener on the form
form.addEventListener('submit', (event) => {
// 4. Prevent the submission of the form with .preventDefault()
  event.preventDefault();
  findPerson(userInput.value);
});

// 5. Inject the results
const injectData = (object) => {
  const name = document.querySelector('#userName');
  const email = document.querySelector('#userEmail');
  const bio = document.querySelector('#userBio');
  const location = document.querySelector('#userLocation');

// info to inject based on the json received
  name.innerText = object.name.fullName;
  email.innerText = object.email;
  bio.innerText = object.bio;
  location.innerText = object.location;
};
