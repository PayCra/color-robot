import React from "react";

function Robot (props) {
    return (
        <svg height="200">
            <rect y="0" className={"Shape1 " + props.ShapeColor1}/>
            <rect y="50" className={"Shape2 " + props.ShapeColor2}/>
            <rect y="80" className={"Shape1 " + props.ShapeColor1}/>
            <rect y="130" className={"Shape1 " + props.ShapeColor3}/>
            <rect y="180" className={"Shape3 " + props.ShapeColor2}/>
            <rect y="190" className={"Shape3 " + props.ShapeColor4}/>
        </svg>
    )
}

export default Robot;