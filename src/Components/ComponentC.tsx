import * as React from 'react';

export function ComponentC(){

    const name = "Torgeir";
    const thankYou = "Takk for god hjelp. Dette var virkelig gøy. :)";

    const handleOKPress= ()=>{
        let text = (document.getElementById("TextAreaB") as HTMLInputElement).value;
            document.getElementById("TextAreaA").innerText = text
    }
    const handleAvbrytPress =()=>{
            (document.getElementById("TextAreaB") as HTMLInputElement).value === ( name ) ?
            document.getElementById("TextAreaA").innerText = thankYou :
            document.getElementById("TextAreaA").innerText = ""
    }   

    return(
        <div className="Komponent-C">
            <h3>Komponent C</h3>
                <button 
                    onClick={handleOKPress}
                    className="OK-Button"
                    name="OK">OK</button>
                <button 
                    onClick={handleAvbrytPress}
                    className="Avbryt-Button"
                    name="Avbryt">Avbryt</button>
        </div>
    );
}

// The code before importing it into the function as internal arrow-functions.
//
// First finds Textarea B and stores information there when the button is pressed.
// Then writes this information to Textarea A.
//
// function handleOKPress(){
//     let text = (document.getElementById("TextAreaB") as HTMLInputElement).value;
//     return( 
//         document.getElementById("TextAreaA").innerText = text,
//         console.log((document.getElementById("TextAreaB") as HTMLInputElement).value)
//       )
// }
//
//
// Finds the location of Textarea A and overwrites it with nothing.
//
// function handleAvbrytPress(){
//     return(
//         document.getElementById("TextAreaA").innerText = "",
//         console.log("Resetting text-box.")
//     )    
// }