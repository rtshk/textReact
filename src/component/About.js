import React from 'react'

export default function About(props) {
  return (
    <>
     <div className={`container text-${props.mode === "light"? "dark":"white"}`}>
        <div className="container">
        <h1 className = "my-5">About Us</h1>
         <h3>Welcome to the Convert Case Text Generator </h3>
         <p>A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text. Explore the options below:</p>
        </div>
        <div className="container">
            <h3>Upper Case</h3>
            <p>
                The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).

                To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.

                THIS IS AN EXAMPLE OF UPPER CASE.</p>
        </div>
        <div className="container">
            <h3> Lower Case</h3>
            <p>
            If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.

            this is an example of lower case
            </p>
        </div>
     </div>
    </>
  )
}
