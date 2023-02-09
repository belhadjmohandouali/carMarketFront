import React from "react"

const bouton = (props) =>{
    const btnCss = `btn ${props.typeBtn} ${props.css}`;
    return <button className={btnCss} onClick={props.click}>{props.children}</button>
};

export default bouton;