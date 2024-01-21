import { useState } from 'react'
import './App.css'
import { Login } from './components/Login'
import { Profile } from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
     <UserContextProvider>
      <h1>Hi! I am learning React form scratch</h1>
      <Login/>
      <Profile/>
     </UserContextProvider>

  )
}

export default App
