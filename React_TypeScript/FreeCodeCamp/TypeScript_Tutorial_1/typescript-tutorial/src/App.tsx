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
function printString(input: string): string {
  console.log("Hello, your input is " + input);
  return input;
}

printString("I can be developer using TypeScript and React haha");
//======================================================================

const printFullName = (name: string): string => {
  return `Hello, ${name}`;
};

const result = printFullName("Agung");
console.log(result); // Output: "Hello, John Doe"
//console.log(printName("Gilang"));

function printFullNameTwo(name: string): string{
  return "Hello, you name is " + name;
}
let printMyName = printFullNameTwo("Gilang");
console.log(printMyName);
//======================================================================

// INTERFACE

interface IPersonData {
  id: number,
  name: string,
  phone: number | string,
  address?: string
}

interface IPerson {
  name: string,
  age: number,
  phone: string,
}

interface IMan extends IPerson{
  heigh: number
}

interface IJob {
  jobName: string,
  jobDesc: string
}
//======================================================================


//======================================================================

// Menggabungkan 2 Type (extending type)

type Panjang = {
  panjang: number;
}

type Persegi = Panjang & {
  lebar: number;
}

let persegi: Persegi = {
  panjang: 10,
  lebar: 20
}
//======================================================================
// An interface extends to type

type PersonInSchool = {
  id: number,
  name: string,
  age: number
}

interface IStudent extends PersonInSchool {
  grade: number,
  overAllScore: number
}

let studentOne: IStudent = {
  id: 1,
  name: "Niki",
  age: 22,
  grade: 3,
  overAllScore: 90
}

console.log(studentOne);


function App() {
  return (
    <div className="App">
      Gilang Learning TypeScript and React from FreeCodeCamp
    </div>
  );
}

export default App;
