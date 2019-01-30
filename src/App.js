import ReactDOM from 'react-dom'
import React,  { Component } from 'react';
import './playground/playground'
import './App.css';

const app = {
    title: "This is my new title.",
    subtitle: "This is my new subtitle.",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // This will make sure that the page will not reload
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderReactApp();
};

const removeFormSubmit = (e) => {
     app.options = [];
    renderReactApp();
};
const appRoot = document.getElementById('root2');
const renderReactApp = () => {
const template = (
   <div>
        <h3>This is the indecision app</h3>
        <h3>{app.title}</h3>
        <h3>{app.subtitle}</h3>
       {
           app.options.map((option) => <p key={option}>Option: {option}</p>)
       }
       <form onSubmit={onFormSubmit}>
            <input type='text' name='option'/>
           <button>Add option</button>
       </form>
       <button onClick={removeFormSubmit}>Remove all</button>
   </div>
);

ReactDOM.render(template, appRoot);
};

renderReactApp();