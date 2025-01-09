import { recipe, user } from '../db/definitions';
import RecCard from './recCard';
import {getRecsByName } from '../db/mongo';

export default async function RecGrid({query, currentPage}:{query: string, currentPage: number}){
    let allRecs= await getRecsByName(query, (currentPage-1)*2);

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