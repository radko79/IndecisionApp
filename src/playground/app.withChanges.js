// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']} />, document.getElementById('app'));

// ---   without class properties syntax plugin   ---

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
const oldGetGreeting = oldSyntax.getGreeting;
console.log(oldSyntax);
console.log(oldGetGreeting()); //broken binding. Fix --> binding

// ---   with class properties syntax plugin   ---

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax);
console.log(newGetGreeting());