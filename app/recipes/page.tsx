import { Suspense } from "react";
import { getRecipes } from "../db/mongo";
import RecGrid from "../components/recGrid";

export default function RecPage(){
    const recs = getRecipes();

    return (
        <Suspense fallback={<div>Loading...</div>}>
              <RecGrid recs={recs}/>
        </Suspense>
    );
}