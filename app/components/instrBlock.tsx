export default function InstrBlock({instructions, editFnc}:{instructions: string[], editFnc: (i:number, s:string) => void}){
    
    let output = instructions.map((i, ind) =>(
        <li key={ind} contentEditable={true} suppressContentEditableWarning={true} onInput={e =>  
            editFnc(ind, e.currentTarget.textContent == null? '':e.currentTarget.textContent)
        }>{i}</li>
    ))
   
    return(
        <div>
            <ol className="list-decimal list-inside">
                {output}
            </ol>
        </div>
    );
}