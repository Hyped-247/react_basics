import ReactDOM from 'react-dom'
import React,  { Component } from 'react';
import './playground/playground'
import './App.css';


class Visibility extends Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visible: true
        }
    }

    toggle(){
        this.setState((preState) => {
            return {
                visible: !preState.visible
            }
        });
    }

    render() {
        return (
            <div>
                { this.state.visible ? <button onClick={this.toggle}>Hide</button>
                    : <button onClick={this.toggle}>Show</button>}
                { this.state.visible ? <p>This is what I want to show</p> : <p>Nothing</p>}
            </div>
        );
    }
}


ReactDOM.render(<Visibility />, document.getElementById('root'));
