export type recipe = {
    _id: string,
    name: string,
    tags: Array<string>,
    instructions: Array<string>,
    ingred: Array<string>,
    servings: number,
    prepTime: number,
    cookTime: number
}

export type user ={
    id: string, 
    username: string, 
    password: string, 
    email: string, 
    tags : Array<string>,
}