export const isAdult = (age) => {
    if( age >= 18) {
        return console.log('You are an adult');
    } else {
        return console.log('You\'re a minor');
    }
}

export const canDrink = (age) => {
    if (age >= 21) {
        return console.log('You are entitled to hangover');
    } else {
        return console.log('Sorry, not yet.');
    }
}

const isSenior = (age) => { 
    age >= 65 ? console.log('Respect!') : console.log('Just a lil bit longer');
};

export default isSenior;