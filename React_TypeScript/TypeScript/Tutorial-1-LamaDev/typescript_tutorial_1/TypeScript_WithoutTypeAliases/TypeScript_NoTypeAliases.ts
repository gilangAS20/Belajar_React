//  TYPE ALIASES
//
// 1. Type aliases adalah fitur yang memungkinkan kita untuk membuat type baru dari type yang sudah ada.
// 2. Type aliases biasanya digunakan untuk membuat type yang kompleks dari type yang sudah ada.
// 3. Type aliases menggunakan kata kunci type.

// Contoh tanpa type aliases
export namespace WithoutTypeAliases 
{

    export let greetings = (user: {name:string, age:number, phone?:string}): string => {
        if(user.phone !== undefined)
        {
            return `Hello ${user.name}, you are ${user.age} years old, and your phone number is ${user.phone}`;
        }
        else
        {
            return `Hello ${user.name}, you are ${user.age} years old`;
        }
    }
}

// print hasil input
//console.log(WithoutTypeAliases.greetings({name: "Gilang", age: 22}));
//console.log(WithoutTypeAliases.greetings({name: "Gilang", age: 22, phone: "08123456789"}));
