import { recipe, user } from '../db/definitions';
import RecCard from './recCard';
import {getRecsByName } from '../db/mongo';
import Link from 'next/link'

export default async function RecGrid({query, currentPage}:{query: string, currentPage: number}){
    let allRecs= await getRecsByName(query, (currentPage-1)*2);
    
    return (
         <div className='flex justify-between max-w-[70%] m-auto p-7 flex-wrap gap-y-11'>
            { allRecs &&
                allRecs.map(((r:recipe) => (
                    <Link href={`/recipes/${r._id}`}><RecCard key={r._id} rec={r}/></Link>
                )))
            }
         </div>
    );
}