import React from "react";
import Car from "./Cars";

export default function Mycars() { 
    return (
        <div>
            <h1> {this.props.title} </h1>
            <Car marque="Ford" couleur="grise" />
            <Car marque="Mercedes" couleur="noire" />
            <Car  couleur="rouge" />
        </div>
    );
}