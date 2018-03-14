import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as aircraftActions from '../../actions/wishlist_compareAction';
import React from 'react';

class Wishlist extends React.Component{
    constructor(props, context){
        super(props, context);
        this.renderAircraftsWL = this.renderAircraftsWL.bind(this);
        this.addToCompare = this.addToCompare.bind(this);
        this.updateIcon = this.updateIcon.bind(this);
    }

    addToWishlist(aircraft){
        this.props.actions.updateWishlist(aircraft);
    }

    addToCompare(aircraft){
        this.props.actions.updateCompare(aircraft);
    }

    updateIcon(aircraft, iconType){
        if(iconType == "compare"){
            if(aircraft.compare) return "Compare +";
            else return "Compare";
        }
        else{
            if(aircraft.wishlist) return "fa fa-heart";
            else return "fa fa-heart-o";
        }
    }

    renderAircraftsWL(){
        var aircrafts = this.props.aircrafts;
        var toRender = [];
        for(var i=0; i<aircrafts.length; i++){
            if(aircrafts[i]["wishlist"] == true){
                toRender.push(aircrafts[i]);
            }
        }
        return toRender.map(aircraft => (
            <div className="aircraft" id={aircraft.id}>
                <div className="card">
                    <img src={aircraft.img}  alt={aircraft.aircraftName} style={{width: '100%'}} /> 
                    <div className="container"> 
                        <h3 className="aircraftName">{aircraft.aircraftName}</h3> 
                        <button className="compareButton" onClick={() => this.addToCompare(aircraft)}>{this.updateIcon(aircraft,"compare")}</button>  
                        <p className="sellerName">{aircraft.sellerName}</p> 
                        <p className="sellerFrom">{aircraft.sellerFrom}</p> 
                        <span><Link to="chat"><button className = "iconButton"><i className="material-icons" style={{fontSize: 15}}>chat</i></button></Link></span> 
                        <p className="price">  {aircraft.price} </p> 
                        <p className="generalSpecs">General Specs:</p> 
                        <ul className="spec"> 
                            <li>Year:   {aircraft.year} </li> 
                            <li>Total Time:   {aircraft.totalTime} </li> 
                            <li>Engine1 Overhaul Time:   {aircraft.engineTime} </li> 
                            <li>Prop1 Overhaul Time:   {aircraft.propTime} </li> 
                            <li>#Seats:   {aircraft.seats} </li> 
                        </ul> 
                        <button className ="iconButton" onClick={() => this.addToWishlist(aircraft)}><i className={this.updateIcon(aircraft,"wishlist")} style={{fontSize: 20}}></i></button> 
                        <Link to={{pathname: "purchase", state:{pic: aircraft.img, name: aircraft.aircraftName, price: aircraft.price}}}><button id="purchaseButton">Purchase Now</button></Link>
                    </div> 
                </div> 
            </div>
        ));
    }

    render(){
        return(
            <div class="aircraftContainer">
                {this.renderAircraftsWL()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);