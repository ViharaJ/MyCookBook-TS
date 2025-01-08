import { Suspense } from "react";
import TagGrid from "./components/tagGrid";
import { getTags } from "./db/mongo";

export default function Home() {
 const user = getTags();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TagGrid tags={user}/>
    </Suspense>
  );
}
