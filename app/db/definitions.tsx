export type recipe = {
    id: String,
    name: String,
    tags: Array<string>,
    instr: Array<string>,
    ingred: Array<string>
}

export type user ={
    id: String, 
    username: String, 
    password: String, 
    email: String, 
    tags : Array<String>,
}