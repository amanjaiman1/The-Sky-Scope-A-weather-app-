// const myFavSuperheroes = ["Ironman", "Captain", "Thor", "Hulk", "BagadBilla"];
// let length = myFavSuperheroes.length;

// myFavSuperheroes[3] = "Aman";

// // window.alert(myFavSuperheroes[3]);

// myFavSuperheroes.unshift("Puneet");
// myFavSuperheroes.push("Himanshu");

// myFavSuperheroes.pop("Himanshu");
// myFavSuperheroes.shift("Puneet");

// myFavSuperheroes.splice(2,0 , "Puneet");

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  params: {city: 'Seattle'},
  headers: {
    'X-RapidAPI-Key': '04d0ba8e11msh63e5ddc8c87cd8dp1b33a4jsn5ecf0f19dd0a',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});




