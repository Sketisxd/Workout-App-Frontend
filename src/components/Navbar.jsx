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
        <header className="bg-snow-white  text-center border border-b-2 border-black ">
            <div className="flex justify-center">
                <Link to="/">
                    <div className="flex align-middle items-center ">
                        <h1 className="text-3xl">Workout Planner</h1>
                        <img className="h-36 w-36" src={image} />
                    </div>
                </Link>
            </div>
            <nav>
                {user && (
                <div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>
                )}
                {!user && (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar