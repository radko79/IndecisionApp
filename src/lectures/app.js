class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            appOptions: props.options
        };
    }

    handleDeleteOptions() {
        this.setState(() => ({ appOptions: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            appOptions: prevState.appOptions.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.appOptions.length);
        const option = this.state.appOptions[randomNum];
        alert(option);
    };

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.appOptions.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ appOptions: prevState.appOptions.concat(option) }));
    }

    render() {
        const appSubtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={appSubtitle} />
                <Action
                    hasOptions={this.state.appOptions.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.appOptions}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

// stateless functional component
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <h1>{props.options.length}</h1>
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second District']} />, document.getElementById('app'));
