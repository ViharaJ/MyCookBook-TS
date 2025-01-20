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
  } catch(e) {
    console.log('We found an error');
    console.log(e);
    
  }finally {
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
       
      }catch(e){
        console.log("Error connecting or retrieing data.");
        return [];
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

    const rec = await recCol.findOne({_id: new ObjectId(id)})!;
    
    return JSON.parse(JSON.stringify(rec));
   
  } catch(e){
    console.log("Could not find recipe with this ID");
  } finally {
    client.close();
  }  
}

export async function getRecsByName(name: string, offset:number, recsPerPage: number): Promise<recipe[]>{
  const client = new MongoClient(uri);

  try {
    const database = client.db('RecInfo');
    const recCol = database.collection<recipe>('Recipes');
    const search = "(?i)" + name + "(?-i)";

    const recs = await recCol.find<recipe>({ownder:"zero", name: {$regex: search, $options:"i"}}, {skip: offset}).limit(recsPerPage).toArray();

    return JSON.parse(JSON.stringify(recs));
   
  } finally {
    client.close();
  }
}

export async function getTotalResults(name: string, recsPerPage: number): Promise<number>{
  const client = new MongoClient(uri);

  try {
    const database = client.db('RecInfo');
    const recCol = database.collection<recipe>('Recipes');
    const search = "(?i)" + name + "(?-i)";

    const totalCount = await recCol.countDocuments({ownder:"zero", name: {$regex: search, $options:"i"}});
    
    return Math.ceil(JSON.parse(JSON.stringify(totalCount))/recsPerPage);
   
  } finally {
    client.close();
  }  

}

//TODO: Insert recipe

export async function submitRec(newR: any): Promise<boolean> {
  const client = new MongoClient(uri);

  try {
    const database = client.db('RecInfo');
    const recCol = database.collection<recipe>('Recipes');

    const submitted = await recCol.insertOne(newR);
    
    return submitted.acknowledged;
   
  } finally {
    client.close();
  }  
}
