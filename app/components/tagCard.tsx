
import Image from 'next/image'

export default function TagCard({tag}:{tag :String}){
    return (
        <div className='p-4 shadow-lg rounded-lg w-52 h-72'>
            <Image className="w-52" src={("/folder-icon.png")} alt="Folder Icon" width="64" height="64"/>
            <p className='m-auto text-center capitalize pt-1 border-2 border-indigo-600'>{tag}</p>
        </div>
    );
}