'use client'

import {useState } from "react";
import IngBlock from "../components/ingBlock";
import InstrBlock from "../components/instrBlock";
import { submitRec } from "../db/mongo";
import { useRouter } from "next/navigation";

export default function InsertPage(){
    const [name, setName] = useState('');
    const [ing, setIng] = useState<string[]>([]);
    const [instr, setInst] = useState<string[]>([]);
    const [currInst, setCurInst] = useState("");
    const [currIngd, setCurIngd] = useState("");
    const [timeServ, setTimeServ] = useState<string[]>(["1","0","0"]);
    const router = useRouter();

    const addInstr = () => {
        let newSet: string[] = instr;
        newSet.push(currInst);
        setInst(newSet);
        setCurInst('');
    }

    const addIngr = () => {
        let arr = currIngd.split(',');
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
        e.preventDefault();
        if (!checkRequired()) {
            return;
        }
    
        const newRec ={
            "name": name,
            "tags": [],
            "ingred":ing,
            "instructions":instr,
            "ownder": 'zero'
        };

        //TODO: Do something else if not submitted correctly
        submitRec(newRec).then((r) => {
            if (r != null){
                router.push(`/recipes/${r}`);
            }
        })
        
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
    <form className="max-w-[90%] m-auto p-5 border-2 flex flex-col" onSubmit={handleSubmit} >
        <div className="my-2">
            <label>Title</label> <input className="border-2 w-[20em]" type='text' required value={name} onChange={(e) => setName(e.target.value)}/>
        </div> 

        <div className="xs:flex-col justify-between my-6 md:flex">
            <div className="xs:my-2"><label className='mr-4'>Servings</label><input className="w-14 border-2 border-black" type='number' required min= '1' onChange={(e) => updateTimeServ(0, e.target.value)}/></div>
            <div className="xs:my-2"><label className='mr-4'>Prep Time</label><input className="w-14 border-2 border-black" type='number' min='0' onChange={(e) => updateTimeServ(1, e.target.value)}/> min</div>
            <div className="xs:my-2"><label className='mr-4'>Cooking Time</label><input className="w-14 border-2 border-black" type='number' required min='0' onChange={(e) => updateTimeServ(2, e.target.value)}/> min</div>
        </div>

        <div className="flex flex-row">
            <label className='mr-4'>Ingredients</label><input className="border-2 basis-4/5" type='text' value={currIngd} 
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
        
        <div className="flex flex-row my-2">
            <label className="mr-3">Instructions</label><textarea className="border-2 basis-4/5" 
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


