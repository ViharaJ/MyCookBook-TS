'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    console.log(searchParams.get('page'));
    const currentPage = Number(searchParams.get('page')) || 1;
   
    const createPageURL = (pageNumber: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', pageNumber.toString());
      return `${pathname}?${params.toString()}`;
    };

    return (
        <div className='flex items-center justify-around w-16 m-auto border-2 border-indigo-600'>
            <Arrow direction={1} path={createPageURL(currentPage-1)} isDisabled={currentPage <= 1}/>
            <p>{currentPage}</p>
            <Arrow direction={2} path={createPageURL(currentPage+1)} isDisabled={currentPage >= totalPages}/>
        </div>
    );
}


function Arrow({direction, path, isDisabled}:{direction: number, path: string, isDisabled: boolean}){
    const classname = 'flex h-10 w-10 items-center justify-center rounded-md border';

    const icon = direction == 1? <ArrowLeftIcon className="w-4"/> :<ArrowRightIcon className='w-4'/>
    return isDisabled? (
        <div>{icon}</div>
    ) : (
    <Link className={classname} href={path}>
        {icon}
    </Link>);
}