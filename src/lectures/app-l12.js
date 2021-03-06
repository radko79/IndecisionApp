console.log('App.js is running');

//JSX - JavaScript XML

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var userObject = {
    name: 'Andy',
    age: 33,
    location: 'Poland'
};

var template = (
    <div>
        <h1>{userObject.name ? userObject.name : 'Anonymous'}</h1>
        {(userObject.age && userObject.age >= 18) && <p>Age: {userObject.age}</p>} 
        <p>{getLocation(userObject.location)}</p>
    </div>
);

var challengeObject = {
    title: 'Indecision app',
    subtitle: 'Put your life in hands of a computer',
    options: ['one', 'two']
}

var challenge = (
    <div>
        <h1>{challengeObject.title}</h1>
        {challengeObject.subtitle && <p>{challengeObject.subtitle}</p>}
        <p>{challengeObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(challenge, appRoot);