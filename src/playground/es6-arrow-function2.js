// arguments object - no longer bound with arrow functions

const addES5 = function (a, b) {
    console.log(arguments);
    return a + b;
}

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 101));

// this keyword - no longer bound

const user = {
    name: 'Radek',
    cities: ['Lodz', 'Katowice', 'Warszawa'],
    placesLived() { // = placesLived: function () {}
        console.log(this.name);
        console.log(this.cities);

        //const that = this;
        return this.cities.map((city) => this.name + ' has lived in ' + city); //transforms each item
        
        return cityMessages;

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
    }
}

console.log(user.placesLived());


//challenge

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply(numbers, multiplyBy) {
        return this.numbers.map(number) => number * this.multiplyBy;
    } 

}

console.log(multiplier.multiply());