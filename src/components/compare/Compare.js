import { Link } from 'react-router';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as aircraftActions from '../../actions/wishlist_compareAction';
import "../../styles/Compare.css";

class Compare extends React.Component{
    constructor(props, context){
        super(props, context);
        this.renderAircraft = this.renderAircraft.bind(this);
        this.renderDeleterBoxes = this.renderDeleterBoxes.bind(this);
        this.removeFromCompare = this.removeFromCompare.bind(this);
    }

    renderAircraft(category){
        const aircrafts = this.props.aircrafts;
        console.log(aircrafts);
        var temp = [];
        for(var i=0; i<aircrafts.length; i++){
            if(aircrafts[i]["compare"] == true){
                temp.push(aircrafts[i]);
            }
        }
        if(category == "img"){
            return temp.map(aircraft => (
                <td><img src={aircraft[category]}  alt={aircraft.aircraftName} style={{width: '200px'}} /></td>
            ));
        }
        else{
            return temp.map(aircraft => (
                <td>{aircraft[category]}</td>
            ));
        }
    }

    removeFromCompare(aircraft){
        this.props.actions.updateCompare(aircraft);
    }

    renderDeleterBoxes(){
        const aircrafts = this.props.aircrafts;
        var temp = [];
        for(var i=0; i<aircrafts.length; i++){
            if(aircrafts[i]["compare"] == true){
                temp.push(aircrafts[i]);
            }
        }
        return temp.map(aircraft => (
            <td><button id="removeButton" onClick={() => this.removeFromCompare(aircraft)}>Remove</button></td>
        ));
    }

    render(){
        const aircrafts = this.props.aircrafts;
        var temp = [];
        for(var i=0; i<aircrafts.length; i++){
            if(aircrafts[i]["compare"] == true){
                temp.push(aircrafts[i]);
            }
        }
        if(temp.length == 0){
            return(<div id="errorMessage"><p>Your compare list is empty! Add something from Home Page first...</p></div>);
        }
        var category = ["img", "aircraftName", "price", "year", "totalTime", "engineTime", "propTime", "seats"];
        return(
            <div id="tableContainer">
            <div id="tableScroll">
                <table>
                    <tbody>
                    <tr id="tabPic">
                        <th>pic</th>
                        {this.renderAircraft(category[0])}
                    </tr>
                    <tr id="aircraftName">
                        <th>Name</th>
                        {this.renderAircraft(category[1])}
                    </tr>
                    <tr id="price">
                        <th>Price</th>
                        {this.renderAircraft(category[2])}
                    </tr>
                    <tr id="year">
                        <th>Year</th>
                        {this.renderAircraft(category[3])}
                    </tr>
                    <tr id="totalTime">
                        <th>Total Time</th>
                        {this.renderAircraft(category[4])}
                    </tr>
                    <tr id="engineTime">
                        <th>Engine 1 Overhaul time</th>
                        {this.renderAircraft(category[5])}
                    </tr>
                    <tr id="propTime">
                        <th>Prop 1 Overhaul time</th>
                        {this.renderAircraft(category[6])}
                    </tr>
                    <tr id="seats">
                        <th># Seats</th>
                        {this.renderAircraft(category[7])}
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


function mapStateToProps(state, ownProps){
    return{
        aircrafts: state.aircrafts
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(aircraftActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Compare);