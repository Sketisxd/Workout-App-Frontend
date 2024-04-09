import { Link } from 'react-router-dom'
import image from '../assets/LogoNavbar.png'

const Navbar = () => {
    return (
        <header className="bg-snow-white  text-center border border-b-2 border-black ">
            <div className="flex justify-center">
                <Link to="/">
                    <div className="flex align-middle items-center ">
                        <h1 className="text-3xl">Workout Planner</h1>
                        <img className="h-36 w-36" src={image} />
                    </div>
                </Link>
                {/* <div className="ml-auto text-md ">
                </div> */}
            </div>
        </header>
    )
}

export default Navbar