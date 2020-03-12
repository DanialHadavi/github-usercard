/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/DanialHadavi")
  .then(response => {
    //console.log(response);
    const myInfo = response.data;
    myGithub(response.data);
    const cards = document.querySelector(".cards");
    const cardInfo = myGithub(myInfo);
    console.log(myInfo);
    cards.appendChild(cardInfo);
  })
  .catch(error => {
    console.log("there was an error", error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "anthonyamaro15",
  "LeesahMasko",
  "berachele",
  "leachcoding",
  "Diddleslip",
  "janecyyu",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

i = 0;
followersArray.forEach((user, i) => {
  axios
    .get(`https://api.github.com/users/${followersArray[i]}`)
    .then(response => {
      console.log(response);
      const myInfo = response.data;
      const cards = document.querySelector(".cards");
      const cardInfo = myGithub(myInfo);
      console.log(cardInfo);
      cards.appendChild(cardInfo);
    })
    .catch(error => {
      console.log("there is an error", error);
    });
  console.log(followersArray);
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const cards = document.querySelector(".cards");

function myGithub(obj) {
  const myCard = document.createElement("div"),
    myImg = document.createElement("img"),
    cardInfo = document.createElement("div"),
    myName = document.createElement("h3"),
    myUsername = document.createElement("p"),
    myLocation = document.createElement("p"),
    myProfile = document.createElement("p"),
    myLink = document.createElement("a"),
    myFollowers = document.createElement("p"),
    myFollowings = document.createElement("p"),
    myBio = document.createElement("p");

  myCard.classList.add("card");
  cardInfo.classList.add("card-info");
  myName.classList.add("name");
  myUsername.classList.add("username");

  myCard.append(myImg, cardInfo);
  cardInfo.append(
    myName,
    myUsername,
    myLocation,
    myProfile,
    myFollowers,
    myFollowings,
    myBio
  );
  myProfile.append(myLink);

  myName.textContent = `${obj.name}`;
  myImg.src = `${obj.avatar_url}`;
  myUsername.textContent = `${obj.login}`;
  myLocation.textContent = `Location: ${obj.location}`;
  myLink.innerHTML = `${obj.html_url}`;
  myLink.href = `${obj.html_url}`;
  myFollowers.innerHTML = `Followers: ${obj.followers}`;
  myFollowings.textContent = `Following: ${obj.following}`;
  myBio.textContent = `Bio: ${obj.bio}`;

  return myCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
