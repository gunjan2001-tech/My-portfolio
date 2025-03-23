
import { useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import "./index.css"
import {Navbar} from "./components/Navbar"
import MobileMenu from './components/MobileMenu'
import { Home } from './components/section/Home'
import { About } from './components/section/About'
import { Project } from './components/section/Project'
import { Contact } from './components/section/Contact'
function App() {
const[isloaded,setIsLoaded] = useState(false)
const [menuOpen, setMenuOpen] = useState(false)


  return (
  <>
  {!isloaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}
    <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100` }>
<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
<Home />
<About/>
<Project/>
<Contact/>
    </div>
  </>
  )
}

export default App
