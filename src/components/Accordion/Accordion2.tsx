import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (accordionValue: boolean) => void
}

function Accordion2(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: (accordionValue: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => props.onClick(!props.collapsed)}> {props.title} </h3>
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

export default Accordion2;