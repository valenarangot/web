import React, { useState } from "react";
import { Header, ButtonComponent, Counter, Footer } from "./components";


export function App(){
    const[value, setValue] = useState(0)
  
    const onAdd = () => {
        setValue(value + 1)
    };
    
    const onSubstract = () => {
        setValue(value > 0 ? value -1: value);
    };
    
    const onReset = () => {
        setValue(0);
    };
    
    return(
        <>
            <Header title="Counter"/>
            <Counter value={value}/>

            <div className="buttonLine">
            <ButtonComponent onClick={onSubstract} className="Substrackbtn" title="Restar" borderColor="orange"/>
            <ButtonComponent onClick={onReset} className="Resetbtn" title="Limpiar"/>
            <ButtonComponent onClick={onAdd} className="Addbtn" title="Sumar" borderColor="orange"/>
            </div>
           
            <Footer title="The best counter"/>

        </>
    )
}