import React from 'react';
import {Component} from 'react';
import './App.css';
import Wheel from "./Components/Wheel";
import Marker from "./Components/Marker";
import Robot from "./Components/Robot";

class App extends Component {

    state = {
        shapeColor1: "initial",
        shapeColor2: "initial",
        shapeColor3: "initial",
        shapeColor4: "initial",
        shapeColor5: "initial",
        shapeColor6: "initial",
        complementaryMarker: 0,
        analogousMarker: 0,
        splitComplementaryMarker: 0,
        triadicMarker: 0,
        tetradicMarker: 0,
        squareMarker: 0,
        selectedColorScheme: "",
        text: <><span className="Emphasized">Click</span><span> on any </span><span className="Emphasized">color wheel</span><span> to change the colors of the robot.</span></>
    };

    handleClick = (color, colorScheme) => {
        if (colorScheme === "Complementary") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 6) % 12,
                shapeColor3: "color" + color,
                shapeColor4: "color" + color,
                shapeColor5: "color" + (color + 6) % 12,
                shapeColor6: "color" + (color + 6) % 12,
                complementaryMarker: color - 1,
                selectedColorScheme: colorScheme,
                text: <><span className="Emphasized">Complementary color scheme</span> is intense and draws immediate attention.<br/>
                    <span className="Emphasized">Hint:</span> this pairing can produce a clashing effect. Use with caution!</>

            })
        } else if (colorScheme === "Analogous") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 1) % 12,
                shapeColor3: "color" + (color + 2) % 12,
                shapeColor4: "color" + color,
                shapeColor5: "color" + (color + 1) % 12,
                shapeColor6: "color" + (color + 2) % 12,
                analogousMarker: color - 1,
                selectedColorScheme: colorScheme,
                text: <><span className="Emphasized">Analogous color scheme</span> produces a harmonious effect.</>
            })
        } else if (colorScheme === "SplitComplementary") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 5) % 12,
                shapeColor3: "color" + (color + 7) % 12,
                shapeColor4: "color" + color,
                shapeColor5: "color" + (color + 5) % 12,
                shapeColor6: "color" + (color + 7) % 12,
                splitComplementaryMarker: color - 1,
                selectedColorScheme: colorScheme,
                text: <><span className="Emphasized">Split complementary</span> is a popular and elegant color scheme for rich but harmonious design.<br/>
                    <span className="Emphasized">Hint:</span> choose one main color and use the other two as accents.</>
            })
        } else if (colorScheme === "Triadic") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 4) % 12,
                shapeColor3: "color" + (color + 8) % 12,
                shapeColor4: "color" + color,
                shapeColor5: "color" + (color + 4) % 12,
                shapeColor6: "color" + (color + 8) % 12,
                triadicMarker: color - 1,
                selectedColorScheme: colorScheme,
                text: <><span className="Emphasized">Triadic color scheme</span> is for the bold.<br/>
                    <span className="Emphasized">Hint:</span> choose one main color and use the other two as accents.</>
            })
        } else if (colorScheme === "Tetradic") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 2) % 12,
                shapeColor3: "color" + (color + 6) % 12,
                shapeColor4: "color" + (color + 8) % 12,
                shapeColor5: "color" + (color + 8) % 12,
                shapeColor6: "color" + (color + 6) % 12,
                tetradicMarker: color - 1,
                selectedColorScheme: colorScheme,
                text: <><span className="Emphasized">Tetradic color scheme</span> will make your design look rich, yet cohesive.<br/>
                    <span className="Emphasized">Hint:</span> choose one main color and use the other three as accents.</>
            })
        } else if (colorScheme === "Square") {
            this.setState({
                shapeColor1: "color" + color,
                shapeColor2: "color" + (color + 3) % 12,
                shapeColor3: "color" + (color + 6) % 12,
                shapeColor4: "color" + (color + 9) % 12,
                shapeColor5: "color" + (color + 9) % 12,
                shapeColor6: "color" + (color + 6) % 12,
                squareMarker: color - 1,
                selectedColorScheme: colorScheme,
                text: <><span className="Emphasized">Square color scheme</span> looks lively and abundant.<br/>
                    <span className="Emphasized">Hint:</span> choose one main color and use the other three as accents.</>
            })
        }
    };

    render() {
        return (
            <div className="All">
                <div className="Title">Color Scheme Robot</div>
                <div className="Container">
                    <div className="Left-column">
                        <div className="Set">
                            <span
                                className={"Label " + (this.state.selectedColorScheme === "Complementary" ? "Selected" : "")}>Complementary</span>
                            <div className="Wheel-container">
                                <Marker rotation={this.state.complementaryMarker} colorScheme="Complementary"/>
                                <Wheel
                                    selection={this.state.selectedColorScheme === "Complementary" ? "SelectedWheel" : ""}
                                    onClick={(color) => this.handleClick(color, "Complementary")}/>
                            </div>
                        </div>
                        <div className="Set">
                            <span
                                className={"Label " + (this.state.selectedColorScheme === "Analogous" ? "Selected" : "")}>Analogous</span>
                            <div className="Wheel-container">
                                <Marker rotation={this.state.analogousMarker} colorScheme="Analogous"/>
                                <Wheel selection={this.state.selectedColorScheme === "Analogous" ? "SelectedWheel" : ""}
                                       onClick={(color) => this.handleClick(color, "Analogous")}/>
                            </div>
                        </div>
                        <div className="Set">
                            <span
                                className={"Label " + (this.state.selectedColorScheme === "SplitComplementary" ? "Selected" : "")}>Split complementary</span>
                            <div className="Wheel-container">
                                <Marker rotation={this.state.splitComplementaryMarker}
                                        colorScheme="SplitComplementary"/>
                                <Wheel
                                    selection={this.state.selectedColorScheme === "SplitComplementary" ? "SelectedWheel" : ""}
                                    onClick={(color) => this.handleClick(color, "SplitComplementary")}/>
                            </div>
                        </div>
                    </div>
                    <div className="Middle">
                        <div className="Robot">
                        <Robot
                            shapeColor1={this.state.shapeColor1}
                            shapeColor2={this.state.shapeColor2}
                            shapeColor3={this.state.shapeColor3}
                            shapeColor4={this.state.shapeColor4}
                            shapeColor5={this.state.shapeColor5}
                            shapeColor6={this.state.shapeColor6}
                        />
                        <div className={"Text"}>{this.state.text}</div>
                    </div>
                    </div>
                    <div className="Right-column">
                        <div className="Set">
                            <span
                                className={"Label " + (this.state.selectedColorScheme === "Triadic" ? "Selected" : "")}>Triadic</span>
                            <div className="Wheel-container">
                                <Marker rotation={this.state.triadicMarker} colorScheme="Triadic"/>
                                <Wheel selection={this.state.selectedColorScheme === "Triadic" ? "SelectedWheel" : ""}
                                       onClick={(color) => this.handleClick(color, "Triadic")}/>
                            </div>
                        </div>
                        <div className="Set">
                            <span
                                className={"Label " + (this.state.selectedColorScheme === "Tetradic" ? "Selected" : "")}>Tetradic (rectangular)</span>
                            <div className="Wheel-container">
                                <Marker rotation={this.state.tetradicMarker} colorScheme="Tetradic"/>
                                <Wheel selection={this.state.selectedColorScheme === "Tetradic" ? "SelectedWheel" : ""}
                                       onClick={(color) => this.handleClick(color, "Tetradic")}/>
                            </div>
                        </div>
                        <div className="Set">
                            <span
                                className={"Label " + (this.state.selectedColorScheme === "Square" ? "Selected" : "")}>Square</span>
                            <div className="Wheel-container">
                                <Marker rotation={this.state.squareMarker} colorScheme="Square"/>
                                <Wheel selection={this.state.selectedColorScheme === "Square" ? "SelectedWheel" : ""}
                                       onClick={(color) => this.handleClick(color, "Square")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
