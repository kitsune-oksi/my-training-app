import React from "react";

type ButtonType = {
    title: 'All'|'Rubles'|'Dollars'
    callback: ()=>void
}

export const Button = (props: ButtonType) => {

    return (
    <button onClick={props.callback}>{props.title}</button>
    )
}