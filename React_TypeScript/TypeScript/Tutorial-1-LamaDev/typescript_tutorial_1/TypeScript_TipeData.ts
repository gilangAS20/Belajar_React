// MY FIRST TYPESCRIPT CODE

//====================================================================================================
// STRING
let variable = "hello";
variable = "hi";
//variable = 12; // throw error: Type 'number' is not assignable to type 'string'.

let personName: string;
personName = "Gilang Agung Saputra";
console.log(personName);
//====================================================================================================



//====================================================================================================
// NUMBER
let age = 54;

let ageWithType: number;
ageWithType = 65;

let tinggiBadan: number = 168;
//====================================================================================================



//====================================================================================================
// BOOLEAN
let isMarried: boolean = false;
//====================================================================================================



//====================================================================================================
// UNION TYPE
let usia: number | string | boolean | number[] ;
usia = 23;
usia = "23";
usia = true;
usia = [1, 2, 3];
//====================================================================================================



//====================================================================================================
// ARRAY
let studentName = ["Ahmad", "Budi", "Chika"];
studentName.push("Dodi");
//studentName.push(12); // throw error: Argument of type 'number' is not assignable to parameter of type 'string'.

let studentAge = [12, 13, 14];
studentAge.push(15);
//studentAge.push("hahaha"); // throw error: Argument of type 'string' is not assignable to parameter of type 'number'.

let parentsName: string[];
parentsName = ["Akbar", "Budi Kirana", "Martin"];
parentsName.push("Nurul Hijriyah");
//parentsName.push(76); // throw error: Argument of type 'number' is not assignable to parameter of type 'string'.

let apaSaja: string | number | boolean | (string | number | boolean)[] ;
apaSaja = "hahaha";
apaSaja = 12;
apaSaja = true;
apaSaja = ["hahaha", 12, true];
apaSaja = ["haha", "ihi", "uhu"];
apaSaja = [12, 13, 14];
apaSaja = [true, false, true];
//====================================================================================================



//====================================================================================================
// OBJECT
let user = {
    userID : 1,
    userName : "Gilang Agung Saputra",
    age : 22,
    address : "Jl. Raya Kedung Halang No. 123",
    isMarried : false
}

user.userName = "Bobon Santoso";
//user.userName = 12; // throw error: Type 'number' is not assignable to type 'string'.
//let user.phoneNumber: number; // throw error: Cannot redeclare block-scoped variable 'user
// tidak bisa menambahkan phoneNumber karena property object user tidak bisa ditambah


let user2: {
    userID : number,
    userName : string,
    age : number,
    address? : string,
    phoneNumber : number,
    isMarried : boolean
}

user2 = {
    userID: 2,
    userName: "Budi Santoso",
    age: 23,
    phoneNumber: 123456789,
    isMarried: false
}
//====================================================================================================



//====================================================================================================
// ANY -> bisa diisi dengan tipe data apapun

let testAny;

testAny = "hahaha";
testAny = 12;
testAny = true;
testAny = ["hahaha", 12, true];
testAny = ["haha", "ihi", "uhu"];
testAny = [12, 13, 14];
testAny = [true, false, true];
// benar-benar tidak terjadi error

let justAny: any;
justAny = "haha";
justAny = 'a';
justAny = 12;
justAny = true;
justAny = ["hahaha", 12, true];
justAny = ["hahaha", 'a', ["tony", 56]];
justAny = {
    userID: 2,
    userName: "Budi Santoso",
    age: 23,
    phoneNumber: 123456789,
    isMarried: false
}

let anyArray: any[];
anyArray = ["hahaha", 12, true];
anyArray = ["haha", "ihi", "uhu"];

