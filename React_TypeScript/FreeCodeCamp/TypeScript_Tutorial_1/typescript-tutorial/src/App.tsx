import React from 'react';
import './App.css';
import { type } from 'os';

let name:string = "Gilang";
name = "Agung";

let age: number | string; // bisa diisi angka maupun string
age= 22;
age = "five";

let isStudent: boolean = true;
let isMarried: boolean = false;

let hobbies: string[];

let role: [number, string];
role = [1, "Admin"];

//======================================================================
type Person = {
  name: string,
  age?: number,
  phone: number
}

// contoh implementasi dari type Person
let person: Person = {
  name: "Gilang",
  age: 22,
  phone: 9823475
}
//======================================================================

let peopleInSchool: Person[];

//======================================================================
// make a function
function printSomething(input: any) {
  
}

function App() {
  return (
    <div className="App">
      Welcome to Typescript Tutorial by FreeCodeCamp
    </div>
  );
}

export default App;
