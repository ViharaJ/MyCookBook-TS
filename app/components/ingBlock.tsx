export default function IngBlock({ingredient}: {ingredient: string[]}){

    return(
        <div className="p-3">
            <ul key={1} className="my-5">
                {ingredient.map( i => (
                    //TODO x icon, on focus make that clickable, show dot
                    <li><div className="p-4 border-2 border-indigo-600 hover:shadow-lg">{i}</div></li>
                ))}
            </ul>
        </div>
    );
}