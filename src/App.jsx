import React, { useState } from 'react'
import { ThemeProvider } from './Theme'
import ThemeBtn from './Component/ThemeBtn'
import Card from './Component/Card'

function App() {

  const [themeMode, setthemeMode] = useState("light");

  const darkTheme = () => {
      setthemeMode("dark")
  }

  const lightTheme = () => {
    setthemeMode("light")
  }

  return (
     <>
   <ThemeProvider  value = {{themeMode , darkTheme , lightTheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                         <Card/>
                    </div>
                </div>
        </div>
   </ThemeProvider>

     </>
  )
}

export default App