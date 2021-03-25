import * as React from 'react';

export function ComponentB(){
    const [buttonColor, setButtonColor] = React.useState("DIV-Button-purple");
    const toggleColorChange= ()=>{
        buttonColor === "DIV-Button-green" ?
        setButtonColor("DIV-Button-purple"):
        setButtonColor("DIV-Button-green")
    }

    return(
        <div className="Komponent-B">
            <h3>Komponent B</h3>
            <textarea 
                className="TextAreaB" 
                id="TextAreaB" 
                name="SecondTextComponent"
                defaultValue="Tekstboks"
               />
            <button 
                className= {buttonColor}
                onClick={toggleColorChange}
                >DIV
            </button>
        </div>
    );
}
