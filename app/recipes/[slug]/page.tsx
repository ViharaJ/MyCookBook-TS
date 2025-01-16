import IngBlock from "@/app/components/ingBlock";
import InstrBlock from "@/app/components/instrBlock";
import { recipe } from "@/app/db/definitions";

export default function RecPage({rec}:{rec : recipe}) {
    return(
    <div>
        //Image prop here
        <h2>{rec.name}</h2>
        <div>
        <IngBlock ingredient={rec.ingred}/>
        </div>
        
        <InstrBlock instructions={rec.instr}/>
    </div>
    );
}