let movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
  };

  console.log(Object.keys(movieData));
  console.log(Object.keys(movieData)[0]);

console.log(movieData["Fantastic Mr. Fox"].cast)




const films = document.getElementsByClassName('film');

const firstFilm = films[0];  
const secondFilm = films[1];
const thirdFilm = films[2];
const fourthFilm = films[3];

// Each of the constants and variables have only numbered names instead of specific to the titles to allow the films in the data set to be changed 
//without needing the change the variable and constant names to be changed. 
//In this instance 'first' or 1 is information relating to The Darjeeling Limited. 'second' or 2 is The Royal Tenanbaums, 'third' or 3 is Fantastic Mr Fox and 'fourth' or 4 is The Grand Budaoest Hotel.

firstFilm.innerHTML = Object.keys(movieData)[0];  //The Darjeeling Limited
secondFilm.innerHTML = Object.keys(movieData)[1];
thirdFilm.innerHTML = Object.keys(movieData)[2];
fourthFilm.innerHTML = Object.keys(movieData)[3];

const plots = document.getElementsByClassName('plot');

const firstPlot = plots[0];
const secondPlot = plots[1];
const thirdPlot = plots [2];
const fourthPlot = plots [3];

firstPlot.textContent = " " + (movieData["The Darjeeling Limited"].plot).replace('"','');             //print plot and replace quotation marks with nothing, removing the quotation marks
secondPlot.textContent = " " +  (movieData["The Royal Tenenbaums"].plot).replace('"',''); 
thirdPlot.textContent = " " + (movieData["Fantastic Mr. Fox"].plot).replace('"',''); 
fourthPlot.textContent = " " + (movieData["The Grand Budapest Hotel"].plot).replace('"',''); 

const ratings = document.getElementsByClassName('rating');

const firstRating = ratings[0];
const secondRating = ratings[1];
const thirdRating = ratings[2];
const fourthRating = ratings[3];

firstRating.textContent = " " + JSON.stringify(movieData["The Darjeeling Limited"].rating);
secondRating.textContent = " " + JSON.stringify(movieData["The Royal Tenenbaums"].rating);
thirdRating.textContent = " " + JSON.stringify(movieData["Fantastic Mr. Fox"].rating);
fourthRating.textContent = " " +  JSON.stringify(movieData["The Grand Budapest Hotel"].rating);

const years = document.getElementsByClassName('year');

const firstYear = years[0];
const secondYear = years[1];
const thirdYear = years[2];
const fourthYear = years[3];

firstYear.textContent = " " +  JSON.stringify(movieData["The Darjeeling Limited"].year);
secondYear.textContent = " " + JSON.stringify(movieData["The Royal Tenenbaums"].year);
thirdYear.textContent = " " + JSON.stringify(movieData["Fantastic Mr. Fox"].year);
fourthYear.textContent = " " + JSON.stringify(movieData["The Grand Budapest Hotel"].year);

const runtimes = document.getElementsByClassName('runtime');

firstRunTime = runtimes[0];
secondRunTime = runtimes [1];
thirdRunTime = runtimes[2];
fourthRunTime = runtimes[3];

firstRunTime.textContent = " " + JSON.stringify(movieData["The Darjeeling Limited"].runtime);
secondRunTime.textContent = " " + JSON.stringify(movieData["The Royal Tenenbaums"].runtime);
thirdRunTime.textContent = " " + JSON.stringify(movieData["Fantastic Mr. Fox"].runtime);
fourthRunTime.textContent = " " + JSON.stringify(movieData["The Grand Budapest Hotel"].runtime);

const castList = document.getElementsByClassName('cast');

firstCast = castList[0];
secondCast = castList[1];
thirdCast = castList[2];
fourthCast = castList[3];

let filmCast1 = movieData["The Darjeeling Limited"].cast;  
formattedFilmCast1 = filmCast1.join(', ');              // will join items in array together with a comma and space between them
firstCast.textContent = " " + formattedFilmCast1;             // displays Jason Schwartzman, Owen Wilson, Adrien Brody

let filmCast2 = movieData["The Royal Tenenbaums"].cast;
formattedFilmCast2 = filmCast2.join(', ');
secondCast.textContent = " " + formattedFilmCast2;

let filmCast3 = movieData["Fantastic Mr. Fox"].cast;
formattedFilmCast3 = filmCast3.join(', ');
thirdCast.textContent = " " + formattedFilmCast3

let filmCast4 = movieData["The Grand Budapest Hotel"].cast;
formattedFilmCast4 = filmCast4.join(', ');
fourthCast.textContent = " " + formattedFilmCast4;

















  //const object1 = {
 // a: 'somestring',
//  b: 42,
 // c: false
//};

//console.log(Object.keys(object1)[0]); logs "a" onto the console.