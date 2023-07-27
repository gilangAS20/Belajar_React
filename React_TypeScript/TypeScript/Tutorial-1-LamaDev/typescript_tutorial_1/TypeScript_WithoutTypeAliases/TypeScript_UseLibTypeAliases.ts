// jalankan "npx ts-node .\TypeScript_UseLibTypeAliases.ts" jika tidak ingin convert ts jadi js

// <reference path = "TypeScript_TypeAliases.ts" />

import { WithoutTypeAliases } from "./TypeScript_NoTypeAliases";
// atau bisa juga dengan cara seperti di bawah:
//import { WithoutTypeAliases as WT } from "./TypeScript_TypeAliases";
// maka jika ingin akses namespace WithoutTypeAliases, cukup dengan menuliskan WT.greetings()

let userOne = {name: "Gilang", age: 22};
let userTwo = {name: "Agung", age: 23};

// print hasil input
console.log(WithoutTypeAliases.greetings(userOne));
console.log(WithoutTypeAliases.greetings(userTwo));
//console.log(greetings(userOne)); // error karena namespace nya tidak disebutkan