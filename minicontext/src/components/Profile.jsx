import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

export function Profile() {

    const {user} = useContext(UserContext)

    if (!user) return <div> please login</div>
    
    return <div> welcome {user.username}</div>
    
}
