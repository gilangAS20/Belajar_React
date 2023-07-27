import { UsingTypeAliases as UTA } from "./TypeScript_UsingTypeAliases";
import {SecondUsingTypeAliases as SUT} from "./TypeScript_UsingTypeAliases";
import { ThirdUsingTypeAliases as TUT } from "./TypeScript_UsingTypeAliases";

let userOne: UTA.UserType = {
    userName: "Gilang",
    age: 22,
    phoneNumber: "085600256897",
    address: "Katang RT 01/ RW 07, Tambakboyo"
}

let userTwo: UTA.UserType = {
    userName: "Yuda Keling",
    age: 72,
    phoneNumber: "085678910"
}

console.log(UTA.greetings(userOne));
console.log(UTA.greetings(userTwo));
console.log("====================================\n");

//let adminOne: SUT.AdminType
console.log(SUT.printAdmin(1, "Admin Satu"));


console.log("====================================\n");

let dataSatu:TUT.UserType = {
    userName: "Raditya Dika",
    age: 37,
    phoneNumber: "8298457",
    address: "Tugu Pancoran",
    gender: "male"
}

let simpanDataSatu = TUT.greetings(dataSatu);
console.log(simpanDataSatu);