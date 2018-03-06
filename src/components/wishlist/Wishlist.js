import {aircrafts} from "../api/mockAircraft"
import { Link } from 'react-router';
import React from 'react';

class Wishlist extends React.Component{
    constructor(props){
        super(props);
        this.renderAircraftsWL = this.renderAircraftsWL.bind(this);
        this.removeFromWishlist = this.removeFromWishlist.bind(this);
        this.addToCompare = this.addToCompare.bind(this);
        var toChange = {};
        for(var i=0; i<aircrafts.length; i++){
            var wishlistNCompare = [];
            if(!aircrafts[i].wishlist){
                wishlistNCompare.push("fa fa-heart-o");
            }
            else{
                wishlistNCompare.push("fa fa-heart");
            }
            if(!aircrafts[i].compare){
                wishlistNCompare.push("Compare");
            }
            else{
                wishlistNCompare.push("Compare +");
            }
            toChange[aircrafts[i].id] = wishlistNCompare;
        }
        var toRender = [];
        for(var i=0; i<aircrafts.length; i++){
            if(aircrafts[i]["wishlist"] == true){
                toRender.push(aircrafts[i]);
            }
        }
        this.state = {aircraftsWL: toRender, toChange};
    }

    removeFromWishlist(id){
        var aircraftList = this.state.aircraftsWL;
        for(var i=0; i<aircraftList.length; i++){
            if(aircraftList[i]["id"] == id){
                aircraftList[i]["wishlist"] = false;
                aircraftList.splice(i, 1)
                this.setState({aircraftsWL: aircraftList});
                break;
            }
        }
    }

    addToCompare(id){
        for(var i=0; i<aircrafts.length; i++){
            if(aircrafts[i]["id"] == id){
                aircrafts[i]["compare"] = true;
                var temp = this.state.toChange;
                temp[aircrafts[i]["id"]] = [temp[aircrafts[i]["id"]][0],"Compare +"];
                this.setState({toChange: temp});
                break;
            }
        }
    }

    renderAircraftsWL(){
        return this.state.aircraftsWL.map(aircraft => (
<div className="aircraft" id={aircraft.id}>
                <div className="card">
                    <img src={aircraft.img}  alt={aircraft.aircraftName} style={{width: '100%'}} /> 
                    <div className="container"> 
                        <h3 className="aircraftName">{aircraft.aircraftName}</h3> 
                        <button className="compareButton" onClick={() => this.addToCompare(aircraft.id)}>{this.state.toChange[aircraft.id][1]}</button>  
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
                        <button className ="iconButton" onClick={() => this.removeFromWishlist(aircraft.id)}><i className={this.state.toChange[aircraft.id][0]} style={{fontSize: 20}}></i></button> 
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

export default Wishlist;