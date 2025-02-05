import { Suspense } from "react";   
import RecGrid from "../components/recGrid";
import Search from "../components/search";
import Pagination from "../components/pagination";
import { getTotalResults } from "../db/mongo";
import Loading from "../components/loading";

export default async function Page(props: {
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>;
  }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const perPage = 4;
    const totalPages = await getTotalResults(query, perPage);
   

    return (
        <div>
            <Search placeholder="Look through recipes..."/>
            <Suspense fallback={<Loading/>}>
                <RecGrid query={query} currentPage={currentPage} recsPerPage={perPage}/>
            </Suspense>
            <Pagination totalPages={totalPages}/>
        </div>
    );
}