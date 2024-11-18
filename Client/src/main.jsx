import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

//in main react create root then inside render app

function Myapp(){
    return (
        <h1>heading</h1>
    )
}

 //create root creates dom like structure just like browser's dom 
 //why need -> b/c it compares main dom with own dom and only updates the things that are updated
 // in ui but brwser removes whole dom then repaint it is known as reload so the virtual dom concept is to only update specific thing
 //react bts uses fibre algo to update virtual dom
 //reconciliation is algo of react reconsiders which algo to be updated 
ReactDOM.createRoot(document.getElementById('root')).render(
    <Myapp />
    //<App />
  
)
