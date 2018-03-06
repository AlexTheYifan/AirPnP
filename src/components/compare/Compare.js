import {aircrafts} from "../api/mockAircraft"
import { Link } from 'react-router';
import React from 'react';
import "../../styles/Compare.css";

class Compare extends React.Component{
    constructor(props){
        super(props);
        this.renderAircraft = this.renderAircraft.bind(this);
        this.renderDeleterBoxes = this.renderDeleterBoxes.bind(this);
        this.removeFromCompare = this.removeFromCompare.bind(this);
        var toRender = [];
        for(var i=0; i<aircrafts.length; i++){
            if(aircrafts[i]["compare"] == true){
                toRender.push(aircrafts[i]);
            }
        }
        this.state = {aircraftsCompare: toRender};
    }

    renderAircraft(category){
        var temp = this.state.aircraftsCompare;
        return temp.map(aircraft => (
            <td>{aircraft[category]}</td>
        ));
    }

    removeFromCompare(id){
        var aircraftList = this.state.aircraftsCompare;
        for(var i=0; i<aircraftList.length; i++){
            if(aircraftList[i]["id"] == id){
                aircraftList[i]["compare"] = false;
                aircraftList.splice(i, 1)
                this.setState({aircraftsCompare: aircraftList});
                break;
            }
        }
    }

    renderDeleterBoxes(){
        var temp = this.state.aircraftsCompare;
        return temp.map(aircraft => (
            <td><button id="removeButton" onClick={() => this.removeFromCompare(aircraft["id"])}>Remove</button></td>
        ));
    }

    render(){
        var category = ["aircraftName", "price", "year", "totalTime", "engineTime", "propTime", "seats"];
        return(
            <div id="tableContainer">
            <div id="tableScroll">
                <table>
                    <tbody>
                    <tr id="aircraftName">
                        <th>Name</th>
                        {this.renderAircraft(category[0])}
                    </tr>
                    <tr id="price">
                        <th>Price</th>
                        {this.renderAircraft(category[1])}
                    </tr>
                    <tr id="year">
                        <th>Year</th>
                        {this.renderAircraft(category[2])}
                    </tr>
                    <tr id="totalTime">
                        <th>Total Time</th>
                        {this.renderAircraft(category[3])}
                    </tr>
                    <tr id="engineTime">
                        <th>Engine 1 Overhaul time</th>
                        {this.renderAircraft(category[4])}
                    </tr>
                    <tr id="propTime">
                        <th>Prop 1 Overhaul time</th>
                        {this.renderAircraft(category[5])}
                    </tr>
                    <tr id="seats">
                        <th># Seats</th>
                        {this.renderAircraft(category[6])}
                    </tr>
                    <tr id="checkBox">
                        <th>Delete</th>
                        {this.renderDeleterBoxes()}
                    </tr>
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}

export default Compare;