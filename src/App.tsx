import './App.css'
import Sidebar from './components/Sidebar'
import Container from './components/Container'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <>
     <BrowserRouter>
        <Sidebar/>
        <Container/>
      </BrowserRouter>
   </>
  )
}

export default App
