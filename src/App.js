import React from 'react';
import {Component} from 'react';
import './App.css';
// import Trial from "./Components/Trial";
import Wheel from "./Components/Wheel";
import Marker from "./Components/Marker";
import Robot from "./Components/Robot";

class App extends Component {
    state = {
        shapeColor1: "",
        shapeColor2: "",
        shapeColor3: "",
        shapeColor4: "",
        complementaryMarker: 0,
        analogousMarker: 0,
        splitComplementaryMarker: 0,
        triadicMarker: 0,
        tetradicMarker: 0,
        squareMarker: 0,
        selectedColorScheme: ""
    };

    handleClick = (color, colorScheme) => {

        if (colorScheme === "Complementary") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + color,
                shapeColor3: "color" + (color + 6) % 12,
                shapeColor4: "color" + (color + 6) % 12,
                complementaryMarker: color - 1,
                selectedColorScheme: colorScheme
            })
        } else if (colorScheme === "Analogous") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 1) % 12,
                shapeColor3: "color" + (color + 2) % 12,
                shapeColor4: "color" + color,
                analogousMarker: color - 1,
                selectedColorScheme: colorScheme
            })
        } else if (colorScheme === "SplitComplementary") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 5) % 12,
                shapeColor3: "color" + (color + 7) % 12,
                shapeColor4: "color" + color,
                splitComplementaryMarker: color - 1,
                selectedColorScheme: colorScheme
            })
        } else if (colorScheme === "Triadic") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 4) % 12,
                shapeColor3: "color" + (color + 8) % 12,
                shapeColor4: "color" + color,
                triadicMarker: color - 1,
                selectedColorScheme: colorScheme
            })
        } else if (colorScheme === "Tetradic") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 4) % 12,
                shapeColor3: "color" + (color + 6) % 12,
                shapeColor4: "color" + (color + 10) % 12,
                tetradicMarker: color - 1,
                selectedColorScheme: colorScheme
            })
        } else if (colorScheme === "Square") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 3) % 12,
                shapeColor3: "color" + (color + 6) % 12,
                shapeColor4: "color" + (color + 9) % 12,
                squareMarker: color - 1,
                selectedColorScheme: colorScheme
            })
        }
    };

    render() {
        return (
            <div className="App">
                <Robot
                    shapeColor1={this.state.shapeColor1}
                    shapeColor2={this.state.shapeColor2}
                    shapeColor3={this.state.shapeColor3}
                    shapeColor4={this.state.shapeColor4}
                />
                {/*<Trial*/}
                {/*    shapeColor1={this.state.shapeColor1}*/}
                {/*    shapeColor2={this.state.shapeColor2}*/}
                {/*    shapeColor3={this.state.shapeColor3}*/}
                {/*    shapeColor4={this.state.shapeColor4}*/}
                {/*/>*/}
                <span className={this.state.selectedColorScheme === "Complementary" ? "Selected" : ""}>Complementary</span>
                <div>
                    <Marker rotation={this.state.complementaryMarker} colorScheme="Complementary"/>
                    <Wheel selection={this.state.selectedColorScheme === "Complementary" ? "SelectedWheel" : ""} onClick={(color) => this.handleClick(color, "Complementary")}/>
                </div>
                <span className={this.state.selectedColorScheme === "Analogous" ? "Selected" : ""}>Analogous</span>
                <div>
                    <Marker rotation={this.state.analogousMarker} colorScheme="Analogous"/>
                    <Wheel selection={this.state.selectedColorScheme === "Analogous" ? "SelectedWheel" : ""} onClick={(color) => this.handleClick(color, "Analogous")}/>
                </div>
                <span className={this.state.selectedColorScheme === "SplitComplementary" ? "Selected" : ""}>Split Complementary</span>
                <div>
                    <Marker rotation={this.state.splitComplementaryMarker} colorScheme="SplitComplementary"/>
                    <Wheel selection={this.state.selectedColorScheme === "SplitComplementary" ? "SelectedWheel" : ""} onClick={(color) => this.handleClick(color, "SplitComplementary")}/>
                </div>
                <span className={this.state.selectedColorScheme === "Triadic" ? "Selected" : ""}>Triadic</span>
                <div>
                    <Marker rotation={this.state.triadicMarker} colorScheme="Triadic"/>
                    <Wheel selection={this.state.selectedColorScheme === "Triadic" ? "SelectedWheel" : ""} onClick={(color) => this.handleClick(color, "Triadic")}/>
                </div>
                <span className={this.state.selectedColorScheme === "Tetradic" ? "Selected" : ""}>Tetradic (rectangular)</span>
                <div>
                    <Marker rotation={this.state.tetradicMarker} colorScheme="Tetradic"/>
                    <Wheel selection={this.state.selectedColorScheme === "Tetradic" ? "SelectedWheel" : ""} onClick={(color) => this.handleClick(color, "Tetradic")}/>
                </div>
                <span className={this.state.selectedColorScheme === "Square" ? "Selected" : ""}>Square</span>
                <div>
                    <Marker rotation={this.state.squareMarker} colorScheme="Square"/>
                    <Wheel selection={this.state.selectedColorScheme === "Square" ? "SelectedWheel" : ""} onClick={(color) => this.handleClick(color, "Square")}/>
                </div>
            </div>
        );
    }
}

export default App;
