import { Suspense } from "react";   
import RecGrid from "../components/recGrid";
import Search from "../components/search";
import Pagination from "../components/pagination";
import { getTotalResults } from "../db/mongo";

export default async function Page(props: {
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>;
  }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await getTotalResults(query);

    return (
        <div>
            <Search placeholder="Look through recipes..."/>
            <Suspense fallback={<div>Loading...</div>}>
                <RecGrid query={query} currentPage={currentPage}/>
            </Suspense>
            <Pagination totalPages={totalPages}/>
        </div>
    );
}