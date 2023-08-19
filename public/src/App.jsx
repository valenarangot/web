import React from "react";
import { ButtonComponent } from "./components/ButtonComponent";

export function App(){
    const componentstyleh1 = {
        color: 'red'
    }

    const componentstyleh3 = {
        color: 'black'
    }

    return(
        <>
            <h1 className="main-title" style={componentstyleh1}>Counter</h1>
            <h3 className="counter-title" style={componentstyleh3}>1</h3>
            <div className="buttonContainer">
            <ButtonComponent title="Rest" color="red"/>
            <ButtonComponent title="Sum" color="green"/>
            </div>
           
        </>
    )
}