//STEP 1
// Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

let myFavMovies = ['just go with it', 'lord of the rings series', 'idiocracy', 'cloud atlas', 'rush'];
console.log(myFavMovies[1]);

//STEP 2
// Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

let moreFavMovies = new Array(5);
moreFavMovies[0] = '1';
moreFavMovies[1] = 'love & mercy';
moreFavMovies[2] = 'i am bolt';
moreFavMovies[3] = 'guardians of the galaxy';
moreFavMovies[4] = 'wedding crashers';
console.log(moreFavMovies[0]);

//STEP 3
// Copy your code from step 2. Add a new movie into the 5th position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

let karensMovies = new Array(5);
karensMovies[0] = '1';
karensMovies[1] = 'love & mercy';
karensMovies[2] = 'i am bolt';
karensMovies[3] = 'guardians of the galaxy';
karensMovies[4] = 'wedding crashers';
karensMovies.splice (4, 0, 'french kiss');
console.log(karensMovies);
console.log(karensMovies.length);

//STEP 4
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

let kkMovies = ['weekend at bernie\'s', 'day after tomorrow', 'any film with Chris Hemsworth', 'wanderlust', 'deepwater horizon'];
delete kkMovies [0];
console.log(kkMovies);

//STEP 5
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.

let i;
let tarantinoMovies = ['pulp fiction', 'django', 'once upon a time in hollywood', 'grindhouse', 'kill bill', 'kill bill 2', 'sin city'];
for(i = 0; i <tarantinoMovies.length; i++) {
    console.log(tarantinoMovies[i]);
}

//STEP 6
// Copy the code from step 5. Now, use a for-in loop to iterate through the array and display each movie within the console window.

let sandlerMovies = ['billy madison', 'happy gilmore', '50 first dates', 'wedding singer', 'blended', 'just go with it', 'reign over me'];
let movie;
for (movie in sandlerMovies) {
    console.log(sandlerMovies[movie]);
}

//STEP 7
// Copy the code from step 5. Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

let anistonMovies = ['we\'re the millers', 'along came polly', 'the bounty hunter', 'wanderlust', 'the break up', 'horrible bosses', 'rumor has it'];
let moreMovies;
for (moreMovies in anistonMovies) {
    console.log(anistonMovies.sort()[moreMovies]);
}

//STEP 8
// Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):Movies I like:Movie 1Movie 2Movie 3...Movies I regret watching:Movie 1Movie 2Movie 3...

let truBasedMovies = ['ford v ferrari', 'hidden figures', 'the theory of everything', 'the pursuit of happyness', 'titanic', 'catch me if you can', 'the blind side'];
let leastFavMovies = ['the dinner', 'a ghost story', 'chi-raq'];

console.log('Movies I like:');
console.log('');
    function iLike(films) {
        let i = 1;
        let film;
        for (film of films) {
            console.log(String(i), film); 
            i++;
        }
        console.log('');
    }
    iLike(truBasedMovies);

console.log('Movies I regret watching:');
console.log('');
    function dontLike(flicks) {
        let i = 1;
        let flix;
        for (flix of flicks) {
            console.log(String(i), flix);
            i++;
        }
        console.log('');
    }
    dontLike(leastFavMovies);

//STEP 9
// Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

let moreTruFilms = ['the imitation game', 'king\'s speech', 'spotlight', 'pride', 'the fighter', 'zodiac', 'a league of their own'];
let leastFavFilms = ['birdman', 'dumb and dumber', 'airplane'];

moreTruFilms = moreTruFilms.concat(leastFavFilms);
moreTruFilms.sort();
console.log(moreTruFilms.reverse());

//STEP 10
// Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.

let greatFilms = ['side effects', 'sixth sense', 'butterfly effect', 'mothman prophecies', 'remember', 'deepwater horizon', 'the sense of an ending'];
let badFilms = ['keanu', 'the hero', 'the take'];
greatFilms = greatFilms.concat(badFilms);
greatFilms.sort();
greatFilms.reverse();

// console.log(greatFilms.slice(-1)[0]); //can also do like this

greatFilms = greatFilms.pop();
console.log(greatFilms);

//STEP 11
// Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.

let chickFlicks = ['a lot like love', 'ps i love you', 'the notebook', 'how to lose a guy in 10 days', 'pretty woman', 'my best friend\'s wedding', 'the ugly truth'];

chickFlicks = chickFlicks.shift();
console.log(chickFlicks);

//STEP 12 NOT DONE
// Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 

let bradPittFilms = ['fight club', 'benjamin button', 'troy', 'thelma and louise', 'moneyball', 'meet joe black', 'legends of the fall'];
let ehFilms = ['for colored girls', 'tinker tailor soldier spy', 'the american'];

let goodBad = bradPittFilms.concat(ehFilms);
goodBad.sort();

    console.log('List of movies: ' + ("<br>"));
    for (one in goodBad) {
    console.log(goodBad[one] + "<br>");
    }



// let goodMovies = ["The Jungle", "The Big Lebowski", "11/22/63", "Employee of the Month", "Shawn of the Dead", "Super Troopers", "Beer Fest"];
// let badMovies = ["Dune", "Attack of the 50' Woman", "Devil's Rejects"];
// let movies = badMovies.concat(goodMovies);
// let choice;
// let store;
// let replace;

// for (a in movies) {
//     window.document.write(movies[a]+"<br>");
// }
//  choice = window.prompt("Select from the list a movie you did not like.");
//  store = movies.indexOf(choice)
//  replace = window.prompt("Add a movie in it's place that you do like. ");

//  movies[store] = replace;
//  window.document.write("<br><br>The new list is: <br>");

//  for (a in movies) {
//     window.document.write(movies[a]+"<br>");
// }

//STEP 13 
// Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window.

let employee1 = [];
let employee2 = [];
employee1['id'] = 1267;
employee1['name'] = 'Ralph';
employee1['title'] = 'overseer';
employee1['department'] = 'R&D';
employee1['current'] = true;
employee2['id'] = 0307;
employee2['name'] = 'Dobie';
employee2['title'] = 'Queen Bee';
employee2['department'] = 'security';
employee2['current'] = true;

//why doesnt this display array list??
let employee;
let employees = employee1.concat(employee2);
for (employee in employees) {
    console.log(employees[employee])
}

console.log(employee2['name']);

//STEP 14 NOT DONE 
// Copy the code from step 13. Modify the code slightly so that you’re using a loop to iterate through the array and print out the names of both employees.

let workerA = [];
let workerB = [];
workerA['id'] = 1115;
workerA['name'] = 'Bean';
workerA['title'] = 'flirt';
workerA['department'] = 'canine resources';
workerA['current'] = true;
workerB['id'] = 1206;
workerB['name'] = 'Bandit';
workerB['title'] = 'Prince';
workerB['department'] = '';
workerB['current'] = true;

// why doesnt this display array list??
let worker;
let workers = workerA.concat(workerB);
console.log(workers);//returns []

// for (worker in workers) {
//     console.log(workers[worker.name]); //nothing
//     console.log(workers['name']); //nothing
//     console.log(workers[worker['name']]);//nothing
// }
// console.log(workers['name']);//undefined

// let workers = workerA.concat(workerB);
// console.log(workers['name']);//undefined

// let w;
// for (w = 0; w < workers.length; w++) {
//     w += workers[w];
// }
// console.log(workers['name']); //undefined



//STEP 15
// Copy the code from step 14. Now add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.

//STEP 16
// Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

//STEP 17
// Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:Employees: ZAK JESSICA MARK FRED SALLY

//STEP 18
// Write a JavaScript function to filter false, null, 0 and blank values from an array.Test Data: window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));Expected Result: [58, "abcd", true]

//STEP 19
// Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.

//STEP 20
// Write a JavaScript function to get the largest number from a numeric array.