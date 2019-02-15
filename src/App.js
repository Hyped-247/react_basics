import ReactDOM from 'react-dom'
import React,  { Component } from 'react';
import './playground/playground'
import './App.css';


class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  componentDidMount(){
      try {
          const json = localStorage.getItem('options');
          const options = JSON.parse(json);
          if (options){this.setState(() => ({options: options}))}
      } catch (e) {
          // do nothing if the JSON is not valid.
      }
  }

   componentDidUpdate(preProps, preState){
      if (preState.options.length !== this.state.options.length){
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json);
      }
  }

    componentWillMount(){
      console.log('componentWillMount');
  }

  handleDeleteOptions() {
      this.setState(() => ({ options: []}));
  };

  handleAddOption(option){
      if (!option){
          return 'Enter a valid value'
      }
      else if (this.state.options.indexOf(option) > 1){
        return 'This option already exists.'
      }
      this.setState((preState) => ({ options: preState.options.concat(option)}));
  };

  handleDeleteOption(optionToRemove){
      console.log(optionToRemove);
      // this.setState((preState) => (
      //     { options: preState.options.filter((option) => (optionToRemove !== option))
      //     }
      // ));
  };


  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options > 0} handlePick={this.handlePick} />
        <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
};

const Action = (props) => {
    return (
      <div>
        <button onClick={props.handlePick} disabled={props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
};


const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
          {props.options.length === 0 && <p>Please add an option.</p>}
        {
          props.options.map((option) => (
              <Option key={option}
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
        <button onClick={(e) => {props.handleDeleteOption(props.optionText)}}>
            Remove
        </button>
      </div>
    );
};


class AddOption extends Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {error: undefined}
    }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({error: error}));

    if (!error){e.target.elements.option.value = '';}
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

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));

