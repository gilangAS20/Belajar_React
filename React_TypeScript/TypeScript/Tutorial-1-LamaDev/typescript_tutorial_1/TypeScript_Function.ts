// FUNCTION

//====================================================================================================
// 1. Function Declaration
let sayHai = () => {
    console.log("Halo gaizzz");
}
//====================================================================================================



//====================================================================================================
//                 string di bawah ini sbg tipe data return value
let sayHello = (): string => {
    return "yuhu";
}
//====================================================================================================



//====================================================================================================
//                 string di bawah ini sbg tipe data input, string sebelum tanda '=>' sbg tipe data return value
let sayHalloAgain = (inputName: string): string => {
    return `Halo ${inputName}`;
}
//====================================================================================================



//====================================================================================================
let funcToSayHallo = (inputUser: string): void => {
    console.log(`Halo ${inputUser}`);
}
funcToSayHallo("Budi");
//====================================================================================================



//====================================================================================================
let greetings = (inputName: string, inputAge: number): string => {
    return `halo ${inputName}, usia Anda adalah ${inputAge} tahun`;
}
console.log(greetings("Gilang", 22));
//====================================================================================================



//====================================================================================================
let kalkulator = (firstNumber: number, secondNumber: number, operation: string): number => {
    if(operation == "+" || operation == "tambah")
    {
        let result = firstNumber + secondNumber;
        return result;
    }
    else if (operation == "-" || operation == "kurang")
    {
        let result = firstNumber - secondNumber;
        return result;
    }
    else
    {   
        console.log("Operation not found");
        return 0;
    }
}
console.log(kalkulator(12, 13, "tambah"));
//====================================================================================================

