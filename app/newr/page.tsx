export default function InsertPage(){
    return(
    <form className="max-w-[55%] m-auto p-5">
        <label>Title</label> <input type='text'/>

        <label>Instructions</label> <input type='text'/>
        <button className="hover:shadow-lg p-4 rounded-full bg-cyan-100 block">Create Recipe!</button>
    </form>);
}