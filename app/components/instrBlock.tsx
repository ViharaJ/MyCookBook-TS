export default function InstrBlock({instructions}:{instructions: (string | string[])}){
    let output;
    if (typeof(instructions) == 'string') {
        output = <li>{instructions}</li>
    } else {
        output = instructions.map((i, ind) =>(
            <li key={ind}>{i}</li>
        ))
        
    }
   
    
    return(
        <div>
            <ol className="list-decimal list-inside">
                {output}
            </ol>
        </div>
    );
}