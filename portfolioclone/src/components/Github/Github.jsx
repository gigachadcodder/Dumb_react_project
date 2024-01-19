import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetcht('https://api.github.com/users/hiteshchoudhray')
        .then(response => response.json)
        .then(data => {
            console.log(data);
            setData(data)
        })

    }, []
    )
    

    return (
       <div className='text-center m-4, bg-gray-600 text-white p-4 text-3xl'> 
       Github followers: {data.followers}
       <img className='text-center' src={data.avatar-url} alt="Git picture" width={300} />
       </div>
    )
}
