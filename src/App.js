import ReactDOM from 'react-dom'
import React,  { Component } from 'react';
import './playground/playground'
import './App.css';



const appRoot = document.getElementById('root2');
let toggle = false;

function updateValue() {
    toggle = !toggle;
    renderReactApp();
}

const showInformation = () => {
    if (toggle){
        return (
            <div>
                <button onClick={updateValue}>Hide information</button>
                 <h3>Hello world</h3>
            </div>
        );
    }else {
         return (
            <div>
                <button onClick={updateValue}>Show information</button>
            </div>
        );
    }
};

const renderReactApp = () => {
const template = (
   <div>
        <h3>Toggle App</h3>
        {showInformation()}
   </div>
);

ReactDOM.render(template, appRoot);
};

renderReactApp();