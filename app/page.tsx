import { Suspense } from "react";
import TagGrid from "./components/tagGrid";
import { getTags } from "./db/mongo";
import Search from "./components/search";
import Loading from "./components/loading";

export default function Home() {
 const user = getTags();

  return (
    <div>
      <Search placeholder="Search for a recipe..."/>
      <Suspense fallback={<Loading/>}>
        <TagGrid tags={user}/>
      </Suspense>
    </div>
    
  );
}
