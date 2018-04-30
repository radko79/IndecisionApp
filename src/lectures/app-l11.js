console.log('App.js is running');

//JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var userObject = {
    name: 'Andy',
    age: 33,
    location: 'Poland'
};

var userName = 'Radek Niejadek';
var userAge = 40;
var userLocation = 'Warsaw';

var template2 = (
    <div>
        <h1>{userObject.name + '!'}</h1>
        <p>Age: {userObject.age}</p>
        <p>Location: {userObject.location}</p>
    </div>
);

var challenge2Object = {
    title: 'challenge title',
    subtitle: 'another title',
    information: 'just the basic facts'
};

var template3 = (
    <div>
        <h1>{challenge2Object.title + '!'}</h1>
        <p>Subtitle: {challenge2Object.subtitle}</p>
        <p>{challenge2Object.information.toUpperCase()}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot);