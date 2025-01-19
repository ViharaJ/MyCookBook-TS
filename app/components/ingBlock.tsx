import { XMarkIcon } from "@heroicons/react/24/outline";

export default function IngBlock({ingredient, delFnc}: {ingredient: string[], delFnc: (i:number) => void}){
    let output = ingredient.map( (i, ind) => (
        //TODO x icon, on focus make that clickable, show dot
        <li key={ind}><div className="hover:shadow-lg p-2">{i}<XMarkIcon onClick={() => {
           delFnc(ind);
        }} className='w-5 inline float-right mr-1 hover:text-red-500'/></div></li>
    ))
    
    return(
          //on hover, show x
        //need to make the whole thing clickable/deleted
            <div>
                <ul className="my-5 list-disc">
                    {output}
                </ul>
            </div>
    );
}