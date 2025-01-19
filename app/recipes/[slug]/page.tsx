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
    <div className="w-2/3 m-auto pt-5">
        {/* Image prop here */}
        <h1 className="text-3xl">{rec.name}</h1>
        <IngBlock ingredient={rec.ingred}/>
        
        <InstrBlock instructions={rec.instructions}/>
    </div>
    );
}