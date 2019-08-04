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


let movie_duration = [90, 85, 75, 60, 120, 150, 125];
const flight_duration = 250-30; //220

let result = [];
let max = 0;
let start=0;
let end=movie_duration.length;
let i = movie_duration[0];
let j = movie_duration[1];

movie_duration = movie_duration.sort(function (a,b) {
  return a-b
});
console.log(movie_duration);

const movies_with_longest_duration = function() {
  while(start < end){
    
    if(movie_duration[start] + movie_duration[end] <= flight_duration){
      if(movie_duration[start] + movie_duration[end]>max){
        max = movie_duration[start] + movie_duration[end];
        i = movie_duration[start];
        j = movie_duration[end];
      }
      start++;
    }else {
      end--;
    }
  }
  result.push(i);
  result.push(j);
  return result;
}

console.log(movies_with_longest_duration());
