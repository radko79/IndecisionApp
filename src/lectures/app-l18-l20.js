console.log('App.js is running');

//JSX - JavaScript XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put you rlife in the hands of a computer',
    options: []
};

//No data added to url coming from form
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }

    console.log('Form submitted!')
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const onWipeOutData = () => {
    app.options = [];
    renderTemplate();
};

const renderTemplate = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length >0 ? 'Here are your options' : 'No options'} </p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onWipeOutData}>Remove all</button>
        <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>
    );
    ReactDOM.render(template, appRoot);
} 

const appRoot = document.getElementById('app');
renderTemplate();