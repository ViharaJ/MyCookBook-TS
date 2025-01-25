'use client'

import { FormEventHandler, useState } from "react";
import IngBlock from "../components/ingBlock";
import InstrBlock from "../components/instrBlock";
import { submitRec } from "../db/mongo";

export default function InsertPage(){
    const [name, setName] = useState('');
    const [ing, setIng] = useState<string[]>([]);
    const [instr, setInst] = useState<string[]>([]);
    const [currInst, setCurInst] = useState("");
    const [currIngd, setCurIngd] = useState("");
    const [timeServ, setTimeServ] = useState<string[]>(["","",""]);


    const addInstr = () => {
        let newSet: string[] = instr;
        newSet.push(currInst);
        setInst(newSet);
        setCurInst('');
    }

    const addIngr = () => {
        let arr = currIngd.split(';');
        let newSet: string[] = ing;
        newSet = newSet.concat(arr);
        setCurIngd('');
        setIng(newSet);
    }

    const delIngr = (index: number) => {
        let newSet: string[] = ing.filter((el, i) => i != index);
        setIng(newSet);
    }

    const editInst = (index: number, newInst: string) => {
        let newSet: string[] =  instr;
        newSet[index] = newInst;
        setInst(newSet);
        console.log(instr);
    }

    const handleSubmit = (e: React.FormEvent) => {
        if (!checkRequired()) {
            e.preventDefault();
            return;
        }
    
        const newRec ={
            "name": name,
            "tags": [],
            "ingred":ing,
            "instructions":instr,
            "ownder": 'zero'
        };

        //Do something else if not submitted correctly
        const r = submitRec(newRec);
    }

    const checkRequired = () => {
        return name.length > 0 && ing.length > 0 && instr.length > 0 && timeServ[0].length > 0 
        && timeServ[1].length > 0 && timeServ[2].length > 0;
    }

    const updateTimeServ = (i:number, n: string) => {
        let v = timeServ;
        v[i] = n;
        setTimeServ(v);
    }

    return(
    <form className="max-w-[55%] m-auto p-5 border-2 flex flex-col" onSubmit={handleSubmit} >
        <div className="my-2">
            <label>Title</label> <input className="border-2" type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div> 

        <div className="flex">
            <div><label className="">Servings</label><input type='number' onChange={(e) => updateTimeServ(0, e.target.value)}/></div>
            <div><label>Prep Time</label><input type='number' onChange={(e) => updateTimeServ(1, e.target.value)}/></div>
            <div><label>Cooking Time</label><input type='number' onChange={(e) => updateTimeServ(2, e.target.value)}/></div>
        </div>

        <div><label>Ingredients</label><input className="border-2" type='text' value={currIngd} 
                onChange={(e) => {setCurIngd(e.target.value)}}
                onKeyDown={e => {
                    if (e.key === 'Enter'){
                        e.preventDefault();
                        e.stopPropagation();

                        if (currIngd.length > 0){ 
                            addIngr();
                        }
                    }
                }}/>
        </div>
        <IngBlock ingredient={ing} delFnc={delIngr}/>
        
        <div className="my-2"><label>Instructions</label><textarea className="border-2 w-4/5" 
        value={currInst} onChange={(e) => {setCurInst(e.target.value)}} onKeyDown={e => {
            if (e.key === 'Enter'){
                e.preventDefault();
                e.stopPropagation();
                if (currInst.length > 0) {
                    addInstr();
                }
            }
        }}/></div>
        <InstrBlock instructions={instr} editFnc={editInst}/>
        <button className="hover:shadow-lg p-4 rounded-full bg-cyan-100 block w-2/5 m-auto">Create Recipe!</button>
    </form>);
}


