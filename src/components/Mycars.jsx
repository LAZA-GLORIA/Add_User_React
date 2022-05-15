import React from "react";
import Car from "./Cars";

export default function Mycars() { 
    return (
        <div>
            <h1> Component Mycars</h1>
            <Car marque="Ford" couleur="grise" />
            <Car marque="Mercedes" couleur="noire" />
            <Car marque="Nissan" couleur="rouge" />
        </div>
    );
}