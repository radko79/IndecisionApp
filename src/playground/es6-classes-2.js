class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    
    getGreeting() {
        // return 'Hi ' + this.name + '!';
        return `Hi, I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //Parent constructor function. Refers to parent class = accessing parent class
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription(); // returns Parent's getDescription
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

// const me = new Student('Andrew Mead', 26, 'Computer Science');
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());

const another = new Traveler('James Bond', 26, 'Philadelphia');
console.log(another.getGreeting());