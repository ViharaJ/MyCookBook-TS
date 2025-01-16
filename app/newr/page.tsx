'use client'

import { useState } from "react";
import IngBlock from "../components/ingBlock";
import InstrBlock from "../components/instrBlock";

export default function InsertPage(){
    const [ing, setIng] = useState(["1 egg"]);
    const [instr, setInst] = useState(["do thi"]);

    // const addIngred = (i: string) => {
    //     let newSet: string[] = ing;
    //     newSet.push(i);
    //     setIng(i);
    // }

    //TODO: remove ingredient //pass this function into IngBlock

    return(
    <form className="max-w-[55%] m-auto p-5 border-2">
        <div className="flex justify-between my-2"><label>Title</label> <input className="border-2" type='text'/><br/></div> 
        <label>Ingredients</label><input className="border-2" type='text'/><br/>
        <IngBlock ingredient={ing}/>
        <div className="my-2"><label>Instructions</label> <input className="border-2" type='text'/></div>
        <InstrBlock instructions={instr}/>
        <button className="hover:shadow-lg p-4 rounded-full bg-cyan-100 block">Create Recipe!</button>
    </form>);
}

