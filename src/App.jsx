import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <img src="image.png" alt="background-image" />

      <div className="form-container">
        <form>
          <h1>LOG IN</h1>
          <div className="divider"></div>
          <Input></Input>
          <Button></Button>
          
        </form>
      </div>
    </div>
    
  )
}

export default App
