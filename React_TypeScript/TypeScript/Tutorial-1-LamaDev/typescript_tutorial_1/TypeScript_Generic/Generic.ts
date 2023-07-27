// GENERIC

//==========================================================================================================
// 1. Tanpa Generic
export namespace NoGeneric{
    export interface IAuthor {
        id: number,
        username: string
    }

    export interface ICategory {
        id: number,
        categoryName: "person" | "group" | "company" | "other"
    }

    export interface IPost {
        id:number,
        title: string,
        description: string,
        extra: IAuthor[] | ICategory[]
    }
}
//==========================================================================================================


//==========================================================================================================
// 2. Dengan Generic
export namespace WithGeneric{
    export interface IGenericPost<T> {
        id:number,
        title: string,
        description: string,
        extra: T[]
    }
}