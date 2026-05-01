import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Landing from './pages/Landing'
import Shopping from './pages/Shopping'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Shopping' element={<Shopping/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
