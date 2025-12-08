
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import TaskPage from './pages/TaskPage'



function App(){
  return ( 
    <>
      <BrowserRouter>
        <Routes>
        
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/tasks' element={<TaskPage/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App