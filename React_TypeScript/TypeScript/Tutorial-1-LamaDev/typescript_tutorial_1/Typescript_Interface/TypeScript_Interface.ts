// INTERFACE
export namespace TypeScript_TryInterface
{
    interface IUser{
        id: number,
        name: string,
        phone: string,
        gender: "male" | "female" | "other"
    }

    export interface IUserWithRole extends IUser{
        role: "employee" | "admin" | "superadmin"
    }

    // let employeeOne:IUserWithRole = {
    //     id: 1,
    //     name: "John Doe",
    //     phone: "28347",
    //     gender: "male",
    //     role: "employee"
    // }
}