import ReactDOM from 'react-dom'
import React,  { Component } from 'react';
import './playground/playground'
import './App.css';

class Counter extends Component{

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    handleAddOne(event){
        this.setState((preState) => {
                return {
                    count: preState.count + 1
                };
            }
        );
    };

    handleMinusOne(event){
        this.setState((preState) => {
            return {
                count: preState.count - 1
            };
        });
    };

    handleReset(event){
           this.setState(() => {
            return {
                count: 0
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }

}

ReactDOM.render(<Counter/>, document.getElementById('root'));
