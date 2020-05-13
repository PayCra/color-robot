import React from "react";

function Robot (props) {
    return (
        <svg width="318px" height="300px" viewBox="71 154 380 260">

            <g className={props.shapeColor1} id="hands-body-head">
                <rect x="201.334" y="105.89" display="inline" stroke="#000000" width="139" height="111"/>
                <rect x="161" y="215.89" display="inline" stroke="#000000" width="197" height="245"/>
                <rect x="73" y="339.557" display="inline" stroke="#000000" width="37" height="41"/>
                <rect x="404" y="354.224" display="inline" stroke="#000000" width="45" height="39"/>
                <line display="inline" fill="none" stroke="#000000" x1="77" y1="460.89" x2="455" y2="460.89"/>
            </g>

            <g className={props.shapeColor2} id="eyes-mouth-outer-chamber">
                <rect x="223" y="120.89" display="inline" stroke="#000000" width="27" height="24"/>
                <rect x="285.5" y="119.89" display="inline" stroke="#000000" width="27" height="24"/>
                <rect x="231.5" y="173.89" display="inline" stroke="#000000" width="71" height="22.5"/>
                <rect x="223.002" y="338.219" display="inline" stroke="#000000" width="88" height="71.333"/>
            </g>

            <g className={props.shapeColor3} id="arms-inner-chamber">
                <rect x="349" y="232.224" display="inline" stroke="#000000" width="100" height="23"/>
                <rect x="73.667" y="218.223" display="inline" stroke="#000000" width="87" height="28"/>
                <rect x="73" y="246.223" display="inline" stroke="#000000" width="26" height="98"/>
                <rect x="420" y="244.224" display="inline" stroke="#000000" width="29" height="112"/>
                <rect x="251.002" y="358.886" display="inline" stroke="#000000" width="50" height="38.667"/>
            </g>

            <g className={props.shapeColor4} id="teeth">
                <rect x="236.5" y="174.39" display="inline" stroke="#000000" width="5.5" height="7.5"/>
                <rect x="248.5" y="174.39" display="inline" stroke="#000000" width="10" height="8.5"/>
                <rect x="267.5" y="174.39" display="inline" stroke="#000000" width="6" height="6.5"/>
                <rect x="286" y="174.39" display="inline" stroke="#000000" width="5" height="7"/>
                <rect x="239.5" y="189.89" display="inline" stroke="#000000" width="8" height="6"/>
                <rect x="257" y="188.724" display="inline" stroke="#000000" width="11.5" height="7.5"/>
                <rect x="278.5" y="186.89" display="inline" stroke="#000000" width="5.5" height="9"/>
                <rect x="292" y="188.89" display="inline" stroke="#000000" width="6" height="7.5"/>
            </g>

            <g className={props.shapeColor5} id="right-top-left-chambers">
                <rect x="293.002" y="263.552" display="inline" stroke="#000000" width="29.333" height="34.667"/>
                <rect x="202.335" y="261.552" display="inline" stroke="#000000" width="16.667" height="14"/>
            </g>

            <g className={props.shapeColor6} id="bottom-left-chamber">
                <rect x="205.668" y="284.886" display="inline" stroke="#000000" width="15.333" height="16.667"/>
            </g>
        </svg>

    )
}

export default Robot;
