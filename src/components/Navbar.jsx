import  {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="bg-snow-white p-10 text-center border border-b-2 border-black ">
            <div className="flex justify-center">
            <Link to="/">
                <h1 className="text-3xl">Workout Planner</h1>
            </Link>
            <div className="ml-auto text-md ">
            </div>
            </div>
        </header>
    )
}

export default Navbar