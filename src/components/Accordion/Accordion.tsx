import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <div>
                {/*Прокидываем пропсы, которые приходят в Accordion*/}
                <AccordionTitle title={props.title}/>
                <AccordionBody />
            </div>
        )
    } else {
        return (
            <div>
                {/*Прокидываем пропсы, которые приходят в Accordion*/}
                <AccordionTitle title={props.title}/>
            </div>
        )
    }
}

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3> {props.title} </h3>
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

export default Accordion;