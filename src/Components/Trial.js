import React from "react";

function Trial (props) {
    return (
        <svg height="200">
            <rect y="0" className={"Shape1 " + props.shapeColor1}/>
            <rect y="50" className={"Shape2 " + props.shapeColor2}/>
            <rect y="80" className={"Shape1 " + props.shapeColor1}/>
            <rect y="130" className={"Shape1 " + props.shapeColor3}/>
            <rect y="180" className={"Shape3 " + props.shapeColor2}/>
            <rect y="190" className={"Shape3 " + props.shapeColor4}/>
        </svg>
    )
}

export default Trial;
