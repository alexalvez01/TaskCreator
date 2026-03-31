import {BrowserRouter,Route,Routes, useLocation, Navigate} from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { MainContext } from './contexts/MainContext'
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

function ProtectedRoute({ children }) {
  const { user, isLoading } = useContext(MainContext);

  if (isLoading) return <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#131313", color: "white" }}>Loading...</div>;

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App(){
  return ( 
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route 
          path='/tasks' 
          element={
            <ProtectedRoute>
              <TaskPage/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App