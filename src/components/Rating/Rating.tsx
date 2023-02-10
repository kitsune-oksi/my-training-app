import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3

type RatingPropsType = {
    value: RatingValueType
    onClick: (raitingValue: RatingValueType) => void
}

export function Raiting(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} id={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} id={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} id={3}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (raitingValue: RatingValueType) => void
    id: RatingValueType
}
const Star = (props: StarPropsType) => <span onClick={() => props.onClick(props.id)}>{props.selected ?
    <b>star </b> : 'star '}</span>
