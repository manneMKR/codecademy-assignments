// Create parent class School
class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    // Getters
    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    // Setters
    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }

    // Methods
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`);
    }

    // Static methods
    static pickSubstituteTeacher(substituteTeachers) {
        let substituteTeachersIndex = Math.floor(Math.random() * (substituteTeachers.length - 1));
        return console.log(substituteTeachers[substituteTeachersIndex]);
    }


}

// Create sub class Primary
class Primary extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }

    // Getters
    get pickUpPolicy() {
        return this._pickUpPolicy;
    }
}

// Create sub class Middle
class Middle extends School {
    constructor(name) {
        super(name);
    }
}

// Create sub class HighSchool
class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
        super(name, 'high', numberOfStudents);
        this._sportsTeam = sportsTeam;
    }

    // Getters
    get sportsTeam() {
        return console.log(this._sportsTeam);
    }
}


// Note: Sub class primary test
const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

// Note: Generate subsitute teacher
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

// Note: create a highschool instance
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeam;



// Nice work! If you've made it this far, you have a strong understanding of class syntax and inheritance.
// If you would like to continue working on this project, we have listed some avenues to build on your progress.
// -- Add more properties to each class (averageTestScores, schoolOverview, etc.)
// -- Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.