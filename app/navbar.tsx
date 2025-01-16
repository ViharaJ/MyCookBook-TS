import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-amber-500 text-white">
            <div className="flex justify-between py-4 px-8 max-w-[80%] m-auto">
                <p className="text-2xl p-1.5"><Link href={"/"}>My Cook Book</Link></p>
                <ul className="flex items-center text-lg">
                    <li className="p-1.5 hover:text-gray-400"><Link href={"/"}>Home</Link></li>
                    <li className="p-1.5 hover:text-gray-400"><Link href={"/newr"}>New Recipe</Link></li>
                    <li className="p-1.5 hover:text-gray-400"><Link href={"/recipes"}>Recipes</Link></li>
                </ul>
            </div>
        </nav>
    )
}