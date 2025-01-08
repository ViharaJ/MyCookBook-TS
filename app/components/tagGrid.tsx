'use client'
import { use } from 'react'
import { user } from '../db/definitions';
import TagCard from './tagCard';

export default function TagGrid({tags}:{tags:Promise<user>}){
    const user = use(tags);
    const allTags = user.tags;

    return (
         <div className='flex justify-between max-w-[70%] m-auto p-7 flex-wrap gap-y-11'>
            { allTags &&
                allTags.map(((t:String, i:number) => (
                    <TagCard key={i} tag={t}/>
                )))
            }
         </div>
    );
}