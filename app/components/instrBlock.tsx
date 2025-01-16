export default function InstrBlock({instructions}:{instructions: string[]}){
    return(
        <div className="p-3">
            <ol key={1}>
                {instructions.map(i =>(
                    <li>{i}</li>
                ))}
            </ol>
        </div>
    );
}