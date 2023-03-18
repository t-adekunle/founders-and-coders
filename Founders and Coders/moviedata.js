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

  console.log(movieData);
  console.log(Object.keys(movieData));
  console.log(Object.keys(movieData)[0]);

const plots = document.getElementsByClassName('plot');


const firstPlot = plots[0];
firstPlot.textContent = "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.";

const secondPlot = plots[1];
secondPlot.textContent = "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.";

const thirdPlot = plots [2];
thirdPlot.textContent = "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.";

const fourthPlot = plots [3];
fourthPlot.textContent = "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.";

const ratings = document.getElementsByClassName('rating');

const firstRating = ratings[0];
firstRating.textContent = "7.2"

const secondRating = ratings[1];

const thirdRating = ratings[2];

const fourthRating = ratings[3];











  //const object1 = {
 // a: 'somestring',
//  b: 42,
 // c: false
//};

//console.log(Object.keys(object1)[0]); logs "a" onto the console.