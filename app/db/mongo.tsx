"use server"
import { MongoClient, ObjectId } from "mongodb";
import { recipe, user } from "./definitions";

// Replace the uri string with your connection string.
const uri:string = process.env.MONGO_URI!;

export async function getTags(): Promise<user> {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('RecInfo');
    const users = database.collection<user>('Users');

    const user = await users.findOne<user>({username:"Zero"})!;

    return JSON.parse(JSON.stringify(user));
   
  } finally {
    client.close();
  }
}

export async function getRecipes(offset: number): Promise<recipe[]>{
  const client = new MongoClient(uri);
    try {
        await client.connect();

        const database = client.db('RecInfo');
        const recCol = database.collection<recipe>('Recipes');
    
        const recs = await recCol.find<recipe>({ownder:"zero"}, {skip: offset}).toArray();
        
        return JSON.parse(JSON.stringify(recs));
       
      } finally {
        client.close();
      }
}

export async function getRecByID(id:string):Promise<recipe>{
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('RecInfo');
    const recCol = database.collection<recipe>('Recipes');

    const rec = recCol.find<recipe>(new ObjectId(id))!;
    
    return JSON.parse(JSON.stringify(rec));
   
  } finally {
    client.close();
  }  
}

export async function getRecsByName(name: string, offset:number): Promise<recipe[]>{
  const client = new MongoClient(uri);
  
  try {
    const database = client.db('RecInfo');
    const recCol = database.collection<recipe>('Recipes');
    const search = "(?i)" + name + "(?-i)";

    const recs = recCol.find<recipe>({owner:"Zero", name: new RegExp(search)}, {skip: offset})!;
    
    return JSON.parse(JSON.stringify(recs));
   
  } finally {
    client.close();
  }
}

//TODO: Insert recipe