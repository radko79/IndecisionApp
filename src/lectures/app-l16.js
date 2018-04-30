console.log('App.js is running');

//JSX - JavaScript XML

let count = 0;

const addOne = () => {
    console.log('addOne');
};

const minusOne = () => {
    console.log('minusOne');
};

const resetButton = () => {
    console.log('resetButton');
};

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={resetButton}>Reset</button>
    </div>
);

console.log(templateTwo)

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);