import IngBlock from "@/app/components/ingBlock";
import InstrBlock from "@/app/components/instrBlock";
import { recipe } from "@/app/db/definitions";
import { getRecByID } from "@/app/db/mongo";

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    
    const slug = (await params).slug
    let rec:recipe = await getRecByID(slug);
    
   return (
    <div>
        {/* Image prop here */}
        <h2>{rec.name}</h2>
        <div>
            <IngBlock ingredient={rec.ingred}/>
        </div>
        
        <InstrBlock instructions={rec.instructions}/>
    </div>
    );
}