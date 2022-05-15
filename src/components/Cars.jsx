import React from "react";

export default function Car( { marque, couleur} ) { 
    console.log(marque);
    return (
        <div style={ {backgroundColor: "pink", width: "400px", padding:"1rem", alignItems: "center"} }>
            <h1> Marque:{ marque } </h1>
            <h1> Couleur: { couleur } </h1>
           
        </div>
    );
}

