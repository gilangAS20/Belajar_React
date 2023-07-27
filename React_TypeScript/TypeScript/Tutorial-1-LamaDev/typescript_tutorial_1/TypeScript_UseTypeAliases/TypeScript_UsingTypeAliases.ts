export namespace UsingTypeAliases
{
    export let greetings = (user: UserType):string =>{
        if(user.address !== undefined)
        {
            let result = `Hello ${user.userName}, you are ${user.age} years old, your phone number is ${user.phoneNumber}, and address: ${user.address}`;
            return result;
        }
        else
        {
            let result = `Hello ${user.userName}, you are ${user.age} years old, your phone number is ${user.phoneNumber}, without address`;
            return result;
        }
    }

    // Type Aliases
    export type UserType = {
        userName: string,
        age: number,
        phoneNumber: string,
        address?: string
    }
}

export namespace SecondUsingTypeAliases
{
    export type AdminType = (id: number, name: string) => void;

    export let printAdmin:AdminType = (inputId, inputName): string => {
            let result = `admin ID: ${inputId}, admin Name: ${inputName}`;
            return result;
    }
}

export namespace ThirdUsingTypeAliases
{
    export type UserType = {
        userName: string,
        age: number,
        phoneNumber: string,
        address?: string
        gender: "male" | "female" | "other"
    }

    // di bawah ini hanya data utk di file ini, tidak bisa diakses dari file lain
    let userData: UserType = {
        userName: "Johnson",
        age: 72,
        phoneNumber: "28374234",
        gender: "male"
    }

    export let greetings = (user: UserType): string => {
        const result = `username: ${user.userName}, age: ${user.age}, phone: ${user.phoneNumber}, gender: ${user.gender}`;
        return result;
    }

    //let tampilDataSatu = greetings(userData);
    //console.log(tampilDataSatu);
}