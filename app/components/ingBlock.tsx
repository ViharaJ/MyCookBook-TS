export default function IngBlock({ingredient}: {ingredient: (string|string[])}){

    if (typeof(ingredient) == 'string'){
        return( 
        <div className="p-3">
            <ul key={1} className="my-5 list-disc">
                <li><div className="p-4 border-2 border-indigo-600 hover:shadow-lg">{ingredient}</div></li>
            </ul>
        </div>)
    } 
    return(
            <div className="p-3">
                <ul key={1} className="my-5 list-disc">
                    {ingredient.map( i => (
                        //TODO x icon, on focus make that clickable, show dot
                        <li><div className="p-4 border-2 border-indigo-600 hover:shadow-lg">{i}</div></li>
                    ))}
                </ul>
            </div>
    );
}