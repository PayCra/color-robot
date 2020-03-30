import React from 'react';
import {Component} from 'react';
import './App.css';
import Robot from "./Components/Robot";
import Wheel from "./Components/Wheel";
import Marker from "./Components/Marker";

// zrób propsy z małej - z dużej są tylko nazwy komponentów

class App extends Component {
    state = {
        ColorScheme: "",
        ShapeColor1: "",
        ShapeColor2: "",
        ShapeColor3: "",
        ShapeColor4: "",
    };

    handleClick = (color, ColorScheme) => {

        if (ColorScheme === "Complementary") {
            this.setState({
                ShapeColor1: "color" + color,
                ShapeColor2: "color" + color,
                ShapeColor3: "color" + (color + 6) % 12,
                ShapeColor4: "color" + (color + 6) % 12
            })
        } else if (ColorScheme === "Analogous") {
            this.setState({
                ShapeColor1: "color" + color,
                ShapeColor2: "color" + (color + 1) % 12,
                ShapeColor3: "color" + (color + 2) % 12,
                ShapeColor4: "color" + color
            })
        } else if (ColorScheme === "SplitComplementary") {
            this.setState({
                ShapeColor1: "color" + color,
                ShapeColor2: "color" + (color + 5) % 12,
                ShapeColor3: "color" + (color + 7) % 12,
                ShapeColor4: "color" + color
            })
        } else if (ColorScheme === "Triadic") {
            this.setState({
                ShapeColor1: "color" + color,
                ShapeColor2: "color" + (color + 4) % 12,
                ShapeColor3: "color" + (color + 8) % 12,
                ShapeColor4: "color" + color
            })
        } else if (ColorScheme === "Tetradic") {
            this.setState({
                ShapeColor1: "color" + color,
                ShapeColor2: "color" + (color + 4) % 12,
                ShapeColor3: "color" + (color + 6) % 12,
                ShapeColor4: "color" + (color + 10) % 12,
            })
        } else if (ColorScheme === "Square") {
            this.setState({
                ShapeColor1: "color" + color,
                ShapeColor2: "color" + (color + 3) % 12,
                ShapeColor3: "color" + (color + 6) % 12,
                ShapeColor4: "color" + (color + 9) % 12
            })
        }
    };

    render() {
        return (
            <div className="App">
                <Robot
                    ShapeColor1={this.state.ShapeColor1}
                    ShapeColor2={this.state.ShapeColor2}
                    ShapeColor3={this.state.ShapeColor3}
                    ShapeColor4={this.state.ShapeColor4}
                />
                <span>Complementary</span>
                <div>
                    <Marker ColorScheme="Complementary"/>
                    <Wheel Blublu={(color) => this.handleClick(color, "Complementary")}/>
                </div>
                <span>Analogous</span>
                <div>
                    <Marker ColorScheme="Analogous"/>
                    <Wheel Blublu={(color) => this.handleClick(color, "Analogous")}/>
                </div>
                <span>Split Complementary</span>
                <div>
                    <Marker ColorScheme="SplitComplementary"/>
                    <Wheel Blublu={(color) => this.handleClick(color, "SplitComplementary")}/>
                </div>
                <span>Triadic</span>
                <div>
                    <Marker ColorScheme="Triadic"/>
                    <Wheel Blublu={(color) => this.handleClick(color, "Triadic")}/>
                </div>
                <span>Tetradic (rectangular)</span>
                <div>
                    <Marker ColorScheme="Tetradic"/>
                    <Wheel Blublu={(color) => this.handleClick(color, "Tetradic")}/>
                </div>
                <span>Square</span>
                <div>
                    <Marker ColorScheme="Square"/>
                    <Wheel Blublu={(color) => this.handleClick(color, "Square")}/>
                </div>
            </div>
        );
    }
}

export default App;
