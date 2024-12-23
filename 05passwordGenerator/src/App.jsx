import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("")
  
   //useref hook
   const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%&*^[]{}"
     
    for (let i = 1; i <= length; i++) {
      let char = Math.floor( (Math.random() *str.length + 1))
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
 
  return (
    <>
     <div className='heading'>
     <h2>Password Generator</h2>
    
      <input type="text" value={password} placeholder='Password'  className='input' ref={passwordRef}  />
      <button className='copybtn' onClick={copyPasswordToClipboard}>Copy</button>
      <div className='lastdiv'>
        <input type="range" min={6} max={100} value={length} className='cursorpointer' onChange={(e)=>{setLength(e.target.value)}}  />
        <label>Length: {length}</label>

        
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev) => !prev)}} className='num'/>
        <label>Numbers</label>
        
        <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={()=>{setCharAllowed((prev) => !prev)}} className='char'/>
        <label>Characters</label>
      </div>
     </div>
    </>
  )
}

export default App
