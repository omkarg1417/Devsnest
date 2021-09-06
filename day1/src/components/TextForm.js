import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    function handleUpClick() {
        // console.log("Up click handler was clicked");
        setText(text.toUpperCase());
    }

    function handleLowClick() {
        setText(text.toLowerCase());
    }

    function handleChange(event) {
        // console.log("Change Handled");
        setText(event.target.value);
    }

    return (
        <>
            <div className="my-3">
                <h1>Enter the text to analyze</h1>
                <div className="mb-3">
                    <textarea className="form-control" value = {text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8" placeholder="Enter text here"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text===""?0:text.split(" ").length} words and {text.length} characters</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
    
}

