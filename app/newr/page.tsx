'use client'

import { useState } from "react";
import IngBlock from "../components/ingBlock";
import InstrBlock from "../components/instrBlock";

export default function InsertPage(){
    const [ing, setIng] = useState<string[]>([]);
    const [instr, setInst] = useState<string[]>([]);
    const [currInst, setCurInst] = useState("");
    const [currIngd, setCurIngd] = useState("");


    //TODO: remove ingredient //pass this function into IngBlock

    const addInstr = () => {
        let newSet: string[] = instr;
        newSet.push(currInst);
        setInst(newSet);
        setCurInst('');
    }

    const addIngr = () => {
        let newSet: string[] = ing;
        newSet.push(currIngd);
        setCurIngd('');
        setIng(newSet);
    }

    const delIngr = (index: number) => {
        let newSet: string[] = ing.filter((el, i) => i != index);
        setIng(newSet);
    }

    return(
    <form className="max-w-[55%] m-auto p-5 border-2">
        <div className="flex justify-between my-2">
            <label>Title</label> <input className="border-2" type='text'/>
        </div> 

        <div>
            <label>Servings</label><input type='number'/>
            <label>Prep Time</label><input type='number'/>
            <label>Cooking Time</label><input type='number'/>
        </div>

        <label>Ingredients</label><input className="border-2" type='text' value={currIngd} 
        onChange={(e) => {setCurIngd(e.target.value)}}
        onKeyDown={e => {
            if (e.key === 'Enter'){
                e.preventDefault();
                e.stopPropagation();
                
                if (currIngd.length > 0){ 
                    addIngr();
                }
            }
        }}/><br/>
        <IngBlock ingredient={ing} delFnc={delIngr}/>
        
        <div className="my-2"><label>Instructions</label><textarea className="border-2 w-4/5" 
        value={currInst} onChange={(e) => {setCurInst(e.target.value)}} onKeyDown={e => {
            if (e.key === 'Enter'){
                e.preventDefault();
                e.stopPropagation();
                addInstr();
            }
        }}/></div>
        <InstrBlock instructions={instr}/>
        <button className="hover:shadow-lg p-4 rounded-full bg-cyan-100 block">Create Recipe!</button>
    </form>);
}

