import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }
    return (

        <form className="login"  onSubmit={handleSubmit}>
            <h3 className="text-2xl text-center">Log in</h3>
            <div className="flex flex-col">
                <label>Email:</label>
                <input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    
                />
            </div>
            <div className="flex flex-col">
                <label>Password:</label>
                <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <div className='flex justify-center'>
            <button disabled={isLoading} className="bg-blue-100 px-4 py-2 rounded-md">Log in</button>
            {error && <div className="error">{error}</div>}
        </div>
        </form>
    )
}


export default Login