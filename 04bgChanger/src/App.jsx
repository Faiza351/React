import { useState } from "react"


function App() {
 const [color, setColor] = useState("olive")

  return (
  <>
    <div className="maindiv" style={{backgroundColor: color}}>
      
    </div>
    <div className="btn1">Text</div>
    </>
  )
}

export default App
