import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

export function Login() {
    const[username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setuser} = useContext(UserContext)


    const handleSubmit = (e) =>{
        e.preventDefault()
        setuser({username, password})

    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username' />
            {'  '}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             type="text" placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
