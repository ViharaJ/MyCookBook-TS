export type recipe = {
    _id: string,
    name: string,
    tags: Array<string>,
    instructions: Array<string>,
    ingred: Array<string>
}

export type user ={
    id: string, 
    username: string, 
    password: string, 
    email: string, 
    tags : Array<string>,
}