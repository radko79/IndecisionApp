import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
    
    // ---   class properties syntax plugin   ---
    state = {
        // appOptions: props.options
        appOptions: []
    };

    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
        
    // }

    
    // handleDeleteOptions() {
    handleDeleteOptions = () => {
        this.setState(() => ({ appOptions: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            appOptions: prevState.appOptions.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick= () => {
        const randomNum = Math.floor(Math.random() * this.state.appOptions.length);
        const option = this.state.appOptions[randomNum];
        alert(option);
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.appOptions.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ appOptions: prevState.appOptions.concat(option) }));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }

        console.log('fetching data');
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.appOptions.length !== this.state.appOptions.length) {
            const json = JSON.stringify(this.state.appOptions);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    };

    componentWillUnmount() {
        console.log('componentWillUnmount');
    };

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
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
