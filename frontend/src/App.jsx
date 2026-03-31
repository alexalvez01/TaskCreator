import {BrowserRouter,Route,Routes, useLocation} from 'react-router-dom'
import { useEffect } from 'react'
import MainPage from './pages/MainPage'
import TaskPage from './pages/TaskPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Dejamos que el navegador maneje el scroll usando el ID y el margen CSS
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

function App(){
  return ( 
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/tasks' element={<TaskPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App