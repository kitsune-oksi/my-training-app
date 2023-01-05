import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3
}

export function Star(props: RatingPropsType) {
    switch (props.value) {
        case 0:
            return (
                <div>
                    <span>star </span>
                    <span>star </span>
                    <span>star </span>
                </div>
            );
        case 1:
            return (
                <div>
                    <span><b>star </b></span>
                    <span>star </span>
                    <span>star </span>
                </div>
            );
        case 2:
            return (
                <div>
                    <span><b>star </b></span>
                    <span><b>star </b></span>
                    <span>star </span>
                </div>
            );
        case 3:
            return (
                <div>
                    <span><b>star </b></span>
                    <span><b>star </b></span>
                    <span><b>star </b></span>
                </div>
            );
        default:
            return (
                <div>
                    <span>star </span>
                    <span>star </span>
                    <span>star </span>
                </div>
            );
    }
}
