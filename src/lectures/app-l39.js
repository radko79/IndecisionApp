class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            appOptions: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                appOptions: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.appOptions.length);
        const option = this.state.appOptions[randomNum];
        alert(option);
    };

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.appOptions.indexOf(option) > -1 ) {
            return 'This option already exists';
        } 

        this.setState((prevState) => {
            return {
                appOptions: prevState.appOptions.concat(option)
            };
        });
    }

    render() {
        const appTitle = "Indecision App";
        const appSubtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header title={appTitle} subtitle={appSubtitle} />
                <Action 
                    hasOptions={this.state.appOptions.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.appOptions}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOptions 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <h1>{this.props.options.length}</h1>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

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

        this.setState(() => {
            return { error };
        })
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));