'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page','1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
    console.log(term);
  }, 300);
 
  return (
    <div className='flex py-4 border-2 justify-center align-center'>
      <input
        className='h-9 p-2 w-64 rounded-l-full border-2 border-orange-300 focus:ring-orange-500 focus:border-orange-500'
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <button className='h-9 bg-orange-300 px-2 pl-2 pr-3 rounded-r-full '>
        <MagnifyingGlassIcon className='w-4 text-white'/>
      </button>
    </div>
  );
}

