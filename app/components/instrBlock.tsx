export default function InstrBlock({instructions}:{instructions: (string | string[])}){

    if (typeof(instructions) == 'string'){
        return(
            <div className="p-3">
                <ol className="list-decimal list-inside" key={1}>
                   {instructions} 
                </ol>
            </div>
        ); 
    }

    
    return(
        <div className="p-3">
            <ol className="list-decimal list-inside" key={1}>
                {instructions.map(i =>(
                    <li>{i}</li>
                ))}
            </ol>
        </div>
    );
}