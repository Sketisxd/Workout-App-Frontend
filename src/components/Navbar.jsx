import { Link } from 'react-router-dom'
import image from '../assets/LogoNavbar.png'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()
    const handleClick = () => {
        logout()
    }
    return (
        <header className="bg-snow-white text-center border border-b-2 border-black ">
            <div className="flex flex-col md:flex-row justify-center place-items-center ">
                <Link to="/">
                    <div className="flex align-middle items-center ">
                        <h1 className="text-3xl">Workout Planner</h1>
                        <img className="h-36 w-36" src={image} />
                    </div>
                </Link>
            <nav className="flex gap-6 mb-2 ">
                {user && (
                <div className="flex flex-col gap-5 items-center">
                    <span>{user.email}</span>
                            <button className="bg-red-300 rounded-md px-2 py-1" onClick={handleClick}>Log out</button>
                </div>
                )}
                {!user && (
                <div className="flex gap-5">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
                )}
            </nav>
            </div>
        </header>
    )
}

export default Navbar