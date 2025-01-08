'use client'
import { use } from 'react'
import { recipe, user } from '../db/definitions';
import RecCard from './recCard';

export default function RecGrid({recs}:{recs:Promise<recipe[]>}){
    const allRecs = use(recs);

    return (
         <div className='flex justify-between max-w-[70%] m-auto p-7 flex-wrap gap-y-11'>
            { allRecs &&
                allRecs.map(((r:recipe) => (
                    <RecCard key={JSON.stringify(r.id)} rec={r}/>
                )))
            }
         </div>
    );
}