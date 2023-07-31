import React from 'react'
import {useState} from 'react'
//text mera ek text hai jo ek variable hai or i can update the text using the setText. put the hook inside the funciton


export default function Textform(props) {
    const handleupclick=()=>{
        console.log("uppercase was invoked" + text)
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to uppercase","success")
    }
    const handleloclick=()=>{
        console.log("lowercase was invoked" + text)
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleClearclick=()=>{
        console.log("lowercase was invoked" + text)
        let newtext = ""
        setText(newtext)
        props.showAlert("Box is Empty!","success")
    }
    const handlOnChange=(event)=>{//we use this to enter anythong in the table and that will be the new text this can help in taking input
        //even when we use this onchange  we get a free event
        console.log("On change")
        setText(event.target.value)
//if i dont listhen on change then i wont be able to write able ot type inside textarea
//   mx-2 should be used for margin
    }
    //hook
    const [text, setText] =useState('');//LETS USE THIS  
  return (
    <>
    <div className='container my-3'  style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handlOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="my_box" rows="8"></textarea>
  </div>
  <button className='btn btn-primary py-3 mx-2' onClick={handleupclick}>Convert to upperCase</button>
  <button className='btn btn-primary py-3 mx-2' onClick={handleloclick}>Convert to lowerCase</button>
  <button className='btn btn-primary py-3 mx-2' onClick={handleClearclick}>Clear Text</button>
  </div>
  <div className='container my-4'style={{color:props.mode==='dark'?'white':'black'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(" ").length} words and {text.length} charaters</p>
  <p>{0.008* text.split(" ").length} :Minutes required to read</p>
  <h2>Preview of the text</h2>
  <p>{text.length>0?text:"Enter input to preview"}</p>
  </div>
  </>
  )
}
