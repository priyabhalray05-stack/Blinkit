import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Landing from './pages/Landing'
import Shopping from './pages/Shopping'
import Dairy from './pages/Package'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Shopping' element={<Shopping/>}/>
        <Route path='/Milk' element={<Dairy/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
