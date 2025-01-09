import { Suspense } from "react";
import { getRecipes } from "../db/mongo";
import RecGrid from "../components/recGrid";
import Search from "../components/search";

export default async function Page(props: {
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>;
  }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const recs = getRecipes((currentPage-1)*4);

    return (
        <div>
            <Search placeholder="Look through recipes..."/>
            <Suspense fallback={<div>Loading...</div>}>
                <RecGrid recs={recs} currentPage={currentPage}/>
            </Suspense>
        </div>
    );
}