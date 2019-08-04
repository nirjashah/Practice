// Movies

// You are on a flight and wanna watch two movies during this flight. 
// You are given int[] movie_duration which includes all the movie durations. 
// You are also given the duration of the flight which is d in minutes. 
// Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min). 
// Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.

// e.g. 
// Input
// movie_duration: [90, 85, 75, 60, 120, 150, 125]
// d: 250

// Output from aonecode.com
// [90, 125]
// 90min + 125min = 215 is the maximum number within 220 (250min - 30min)


const movie_duration = [90, 85, 75, 60, 120, 150, 125];
const flight_duration = 250-30; //220

let result = [];
let min = flight_duration;

const movies_with_longest_duration = function() {
  if (movie_duration.length <= 2) {
    result = movie_duration;
    console.log(result);
    return result;
  }
  for(i=0; i<movie_duration.length-1; i++){
    const result1 = flight_duration - movie_duration[i]; //220-90 =130
    for(j=i+1; j<movie_duration.length; j++){
      const result2 = result1 - [movie_duration[j]];
      if(result2 < min && result2 >0){
				min = result2;
        result.shift(); result.shift();
        result.push(movie_duration[i], movie_duration[j]);
      }
    }
    return result
  }
}

console.log(movies_with_longest_duration());
