import { TypeScript_TryInterface as TryInterface } from "./TypeScript_Interface";

// make employee from interface

let employeeOne: TryInterface.IUserWithRole = {
    id: 1,
    name: "John Caroo",
    phone: "938745",
    gender: "male",
    role: "employee"
}
console.log(employeeOne);