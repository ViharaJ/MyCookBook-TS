
import Image from 'next/image'
import { recipe } from '../db/definitions';

export default function RecCard({rec}:{rec :recipe}){
    return (
        <div className='p-4 shadow-lg rounded-lg w-30 h-30'>
            <Image className="w-52" src={("/folder-icon.png")} alt="Folder Icon" width="64" height="64"/>
            <p className='m-auto text-center capitalize pt-1 border-2 border-indigo-600'>{rec.name}</p>
        </div>
    );
}