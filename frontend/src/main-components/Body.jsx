import Home from './body-components/Home'
import About from './body-components/About'
import Cards from './body-components/Cards'
import Create from './body-components/Create'
import "../main-styles/bodystyle.css"
import {useContext} from 'react'
import {MainContext} from '../contexts/MainContext'




function Body() {

  const {isDark}=useContext(MainContext)
  
  
  return (
    <main className={isDark?"main_dark":"main"}>
        <Home />
        <About/>
        <Cards/>
        <Create/>
    </main>
  )
}

export default Body