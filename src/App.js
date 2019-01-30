import ReactDOM from 'react-dom'
import React,  { Component } from 'react';
import './playground/playground'
import './App.css';

let count = 0;

const addOne = () => {
   count ++;
   renterCounterApp();
   console.log(count);
};

const minusOne = () => {
   count --;
   renterCounterApp();
   console.log(count);
};

const reSetOne = () => {
   count = 0;
   renterCounterApp();
   console.log(count);
};

const appBoot = document.getElementById('root2');

const renterCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} >+1</button>
            <button onClick={minusOne} >-1</button>
            <button onClick={reSetOne} >0</button>
        </div>
);
ReactDOM.render(template, appBoot);
};

renterCounterApp();
