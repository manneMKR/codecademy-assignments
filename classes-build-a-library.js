/***********************************
Codecademy Build a Library challenge
Topic: Classes
Author: Manne Messemaker
***********************************/

// Create parent class Media
class Media {
    constructor(title) {
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }

    // Parent class getters
    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    // The following isCheckedOut() getter requires the toggleCheckOutStatus() method to directly address the _isCheckedOut property instead of via the isCheckedOut getter.
    // Not using this code for now

    // get isCheckedOut() {
    //     let checkedOutStatus;
    //     if (this._isCheckedOut === true) {
    //         checkedOutStatus = 'The item is checked out.';
    //     } else {
    //         checkedOutStatus = 'The item is currently available.';
    //     }
    //     return checkedOutStatus;
    // }

    get ratings() {
        return this._ratings;
    }

    // Parent class setters
    set title(title) {
        this._title = title;
    }

    set isCheckedOut(status) {
        this._isCheckedOut = status;
    }

    set rating(addRating) {
        this._ratings.push(addRating);
    }

    // Parent class methods

    // Todo: use reduce method.
    // HINT: let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);    
    
    getAverageRating() {
        let ratingsSum = 0;
        let ratingsAverage = 0;

        // Calculate the sum of all elements in the ratings[] array
        for (let ratingIndex = 0; ratingIndex < this._ratings.length; ratingIndex++) {
            ratingsSum += this.ratings[ratingIndex];
        };

        // Calculate average and return
        ratingsAverage = ratingsSum / this.ratings.length;
        return 'Average rating is: ' + ratingsAverage;
    }

    toggleCheckOutStatus() {
        if (this.isCheckedOut === true) {
            this.isCheckedOut = false;
        } else {
            this.isCheckedOut = true;
        }
    }

    addRating(newRating) {
        if (newRating > 0 && newRating <= 10 && typeof newRating === "number") {
            this.rating = newRating;
        } else {
            console.log(`${newRating} is invalid. Please enter a number between 1 and 10`);
        }
    }
}

// Create sub class Book
class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    // Sub class getters
    get author() {
        return this._author;
    }

    get pages() {
        return this._pages + ' pages';
    }
}

// Create sub class Movie
class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    // Sub class getters
    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime + ' minutes runtime';
    }
}


// Create sub class CD
class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = [songs];
    }

    // Sub class getters
    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs.join();
    }
}



// Note: Create test objects
const test = new Media('Rock&Roll');
const testBook = new Book('My JavaScript', 'Messemaker', 39);
const testMovie = new Movie('Human Traffic', 'Who Knows', 120);
const testCD = new CD('Chill:in 2', 'Various', ['Song', 'Song 2', 'Song 3', 'Song 4']);


// // Note: perform some tests on the classes
// console.log(testBook.author);
// console.log(testBook.title);
// console.log(testBook.pages);
// testBook.addRating(5);
// console.log(testBook.getAverageRating());

// console.log(testMovie.director);
// console.log(testMovie.title);
// console.log(testMovie.runTime);
// testMovie.addRating(5);
// testMovie.addRating(8);
// console.log(testMovie.getAverageRating());

// console.log(testCD.artist);
// console.log(testCD.title);
// console.log(testCD.songs);
// testCD.addRating(5);
// testCD.addRating(8);
// console.log(testCD.getAverageRating());


// // Note: Test the toggleCheckOutStatus()
// testMovie.toggleCheckOutStatus();
// console.log(testMovie.isCheckedOut);
// testMovie.toggleCheckOutStatus();
// console.log(testMovie.isCheckedOut);
// testMovie.toggleCheckOutStatus();
// console.log(testMovie.isCheckedOut);

