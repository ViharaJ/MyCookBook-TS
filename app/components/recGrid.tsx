import { recipe } from '../db/definitions';
import RecCard from './recCard';
import {getRecsByName } from '../db/mongo';
import Link from 'next/link'

export default async function RecGrid({query, currentPage, recsPerPage}:{query: string, currentPage: number, recsPerPage: number}){
    let allRecs= await getRecsByName(query, (currentPage-1)*recsPerPage, recsPerPage);
    
    return (
         <div className='flex justify-between m-auto p-7 flex-wrap gap-y-11' key={1}>
            { allRecs &&
                allRecs.map(((r:recipe) => (
                    <Link href={`/recipes/${r._id}`}><RecCard key={r._id} rec={r}/></Link>
                )))
            }
         </div>
    );
}