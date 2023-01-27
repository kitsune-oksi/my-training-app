import React, {useState} from "react";

export function UncontroledRaiting() {
    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} id={1}/>
            <Star selected={value > 1} setValue={setValue} id={2}/>
            <Star selected={value > 2} setValue={setValue} id={3}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: (value: number) => void
    id: number
}

const Star = (props: StarPropsType) => {
    const onClickStarHandler = () => {
        props.setValue(props.id)
    }

    return (
        <>
            {props.selected ? <span onClick={onClickStarHandler}><b>star</b> </span> : <span onClick={onClickStarHandler}>star </span>}
        </>
    )
}
