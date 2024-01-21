
import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react'

function App() {
  const [thememode, setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  // theam change

useEffect(() =>{
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(thememode)
}, [])

  return (
    <ThemeProvider value={{thememode, lightTheme, darkTheme}}> 
    
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* theambtn */} 
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      {/*Card*/}
                       
                    </div>
                </div>
            </div>
</ThemeProvider>

  )
}

export default App
