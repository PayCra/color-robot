import React from "react";
import "./../Colors.css";

function Wheel (props) {

    return (
        <div>
            {/*<svg className={props.selection} width="175px" height="175px" viewBox="0 0 200 200">*/}
            {/*    <circle cx="100px" cy="100px" r="100px" fill={"transparent"}></circle>*/}
            {/*</svg>*/}

            <svg className={props.selection} width="150px" height="150px" viewBox="0 0 200 200">
            <path onClick={() => props.onClick(1)} className="color1" d="M74.11,3.395L99.989,100l0.014-0.001L125.889,3.39C108.942-1.132,91.054-1.13,74.11,3.395z"/>
            <path onClick={() => props.onClick(2)} className="color2" d="M125.882,3.392L99.99,99.994l0.013,0.006l70.723-70.722C158.311,16.889,142.817,7.946,125.882,3.392z"/>
            <path onClick={() => props.onClick(3)} className="color3" d="M170.718,29.276L99.994,99.991l0.007,0.012l96.61-25.886C192.054,57.179,183.108,41.688,170.718,29.276z"/>
            <path onClick={() => props.onClick(4)} className="color4" d="M196.605,125.891L100,100.01v-0.013l96.609-25.886C201.132,91.058,201.13,108.946,196.605,125.891z"/>
            <path onClick={() => props.onClick(5)} className="color5" d="M170.717,170.725l-70.723-70.716L100,99.997l96.609,25.885C192.054,142.82,183.108,158.313,170.717,170.725z"/>
            <path onClick={() => props.onClick(6)} className="color6" d="M125.88,196.608l-25.888-96.604l0.01-0.008l70.724,70.723C158.311,183.111,142.817,192.054,125.88,196.608z"/>
            <path onClick={() => props.onClick(7)} className="color7" d="M74.11,196.605L99.99,100h0.013l25.887,96.608C108.942,201.131,91.054,201.13,74.11,196.605z"/>
            <path onClick={() => props.onClick(8)} className="color8" d="M29.275,170.718l70.717-70.724l0.011,0.008l-25.886,96.609C57.179,192.054,41.688,183.108,29.275,170.718z"/>
            <path onClick={() => props.onClick(9)} className="color9" d="M3.392,125.882l96.604-25.891l0.006,0.012l-70.722,70.724C16.889,158.311,7.946,142.817,3.392,125.882z"/>
            <path onClick={() => props.onClick(10)} className="color10" d="M3.395,74.111L100,99.991v0.012L3.39,125.892C-1.131,108.944-1.13,91.056,3.395,74.111z"/>
            <path onClick={() => props.onClick(11)} className="color11" d="M3.39,74.118l96.604,25.892L100,99.997L29.278,29.274C16.888,41.688,7.946,57.181,3.39,74.118z"/>
            <path onClick={() => props.onClick(0)} className="color0" d="M29.275,29.282l70.715,70.724l0.011-0.009L74.115,3.389C57.178,7.945,41.688,16.892,29.275,29.282z"/>
        </svg>
        </div>
    )
}

export default Wheel;
