import React, {useState} from "react";

type UncontroledAccordionPropsType = {
    title: string

}
type AccordionTitleProps = {
    title: string
    setCollapsed: (collapse: boolean) => void
    collapsed: boolean
}

function AccordionTitle({title, setCollapsed, collapsed}: AccordionTitleProps) {
    const onClickTitleHandler = () => {
        setCollapsed(!collapsed)
    }

    return <h3 onClick={onClickTitleHandler}> {title} </h3>
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

export const UncontroledAccordion = (props: UncontroledAccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </>
    )
}