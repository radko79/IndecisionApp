class IndecisionApp extends React.Component {
    render() {
        const appTitle = "Indecision App";
        const appSubtitle = "Put your life in the hands of a computer"
        const appOptions = ['one', 'two', 'four']
        return (
            <div>
                <Header title={appTitle} subtitle={appSubtitle}/>
                <Action />
                <Options options={appOptions}/>
                <AddOptions />
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
                <button>What should I do?</button>
            </div>
        )
    }
}



class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.length}
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
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
    render() {
        return (
            <div>
                <h1>AddOptions component here</h1>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));