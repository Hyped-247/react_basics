import ReactDOM from 'react-dom'
import React,  { Component } from 'react';
import './playground/playground'
import './App.css';


const appObject = {
  title: "My new title here.",
  subtitle: "Here is my subtitle. ",
    options: ['one', 'two']
};

const template = (
  <div>
    <h1>{appObject.title}</h1>
    {appObject.subtitle && <p>{appObject.subtitle}</p>}
    {appObject.options.length > 0 ? "here are your options" : "No options"}
  </div>
);
const appRoot = document.getElementById("root2");
ReactDOM.render(template, appRoot);

const multiplier = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    multiplyBy: 7,
    multiplyNumbers(){
        return this.numbers.map((number) => this.multiplyBy * number)
    }
};
const result = multiplier.multiplyNumbers();
console.log(result);

// let template = (
//     <div>
//       <h1>This is my html</h1>
//       <h1>This is my html</h1>
//       <h1>This is my html</h1>
//       <ol>
//         <li>item 1</li>
//         <li>item 2</li>
//         <li>item 3</li>
//       </ol>
//     </div>
// );
//
//
// let appRoot = document.getElementById("root");
// ReactDOM.render(template, appRoot);

// var username = "Mo";
// var age = 22;
// var location = 'New York';
//
// var userInformation = {
//     name: 'Mohammad Mahjoub',
//     age: 17,
//     location: 'Saudi Arabia'
// };
//
// function getLocation(location){
//   if (location){
//     return <p>location: {location}</p>;
//   }
// }
//
// let accountInformation = (
// <div>
// <h1>{userInformation.name ? userInformation.name : 'No name'}</h1>
//     {userInformation.age >= 18 && <p>Age:{userInformation.age}</p>}
// {getLocation(userInformation.location)}
// </div>
// );
//
// let appRoot2 = document.getElementById("root");
// ReactDOM.render(accountInformation, appRoot2);


// class App extends Component {
//   render() {
//     return (
//         <p>This is my name</p>
//     );
//   }
// }
//
// export default App;
