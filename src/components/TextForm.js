import PropTypes from 'prop-types'
import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpperCaseClick = () => {
        setText(text.toUpperCase()); // for chnaging the value of the to upper case.
        props.alert('Text Has been Converted to the UpperCase sucessfully!!!!' , 'success');
    }
    const handleLowerCase = () => {
        setText(text.toLowerCase());
        props.alert('Text Has been Converted to the LowerCase sucessfully!!!!' , 'success');
    }
    const handlechangecase = (event) => {
        setText(event.target.value);
    }
    const handlebackground = () => {
        document.querySelector(".form-control").style.backgroundColor = "rgb(0 54 104)";
        document.querySelector(".form-control").style.color = "white";
    }
    const hanndlenormalbackground = () => {
        document.querySelector(".form-control").style.backgroundColor = "white";
        document.querySelector(".form-control").style.color = "black";
    }
    return (
        <>

            <div className="mb-3">
                <h1 className='heading'>{props.heading}</h1>
                <textarea className="form-control" onChange={handlechangecase} id="exampleFormControlTextarea1" rows="8" value={text} placeholder="Enter your text Here"></textarea>
                <button className="btn btn-primary my-4 mx-2" onClick={handleUpperCaseClick}>Convert To Upper Case</button>
                <button className="btn btn-danger" onClick={handleLowerCase}>Convert To Lower Case</button>
                <button className="btn btn-danger mx-2" onClick={handlebackground}>Change the background color to black and text color to white</button>
                <button className="btn btn-danger mx-2" onClick={hanndlenormalbackground}>Change the background color to white and text color to black</button>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length - 1} words {text.length} characters</p>
                <p>{0.0008 * (text.split(" ").length-1)} Minutes to Read the Whole Paragraph</p>

                <h2>Preview</h2>
                <p>{text.length === 0 ? "Enter the text in the textbox to preview it here" : text}</p>

            </div>
        </>
    )
}

TextForm.propTypes = { heading: PropTypes.string }

export default TextForm