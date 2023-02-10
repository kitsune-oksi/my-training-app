import React, {useState} from "react";

export function UncontroledRaiting() {
    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

const Star = (props: StarPropsType) => {
    const onClickStarHandler = () => props.setValue()

    return (
        <>
            <span onClick={onClickStarHandler}> {props.selected ? <b>star</b> : 'star'} </span>
        </>
    )
}
