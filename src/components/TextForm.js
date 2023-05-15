import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} className='container'>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea className="form-control" style={{
            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
            color: props.mode === 'dark' ? 'white' : '#042743'
          }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Upper Case</button>
      </div>

      <div style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it"}</p>
      </div>
    </>
  )
}
