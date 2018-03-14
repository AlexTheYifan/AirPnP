import React, {PropTypes} from 'react';
import { Link , IndexLink} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as aircraftActions from '../../actions/wishlist_compareAction';
import "../../styles/Header.css";


class Header extends React.Component{
    constructor(props, context){
        super(props, context);
        this.updateCount = this.updateCount.bind(this);
    }

    updateCount(countType){
        var temp = [];
        const aircrafts = this.props.aircrafts;
        if(countType == "compare"){
            for(var i=0; i<aircrafts.length; i++){
                if(aircrafts[i]["compare"] == true){
                    temp.push(aircrafts[i]);
                }
            }
        }
        else{
            for(var i=0; i<aircrafts.length; i++){
                if(aircrafts[i]["wishlist"] == true){
                    temp.push(aircrafts[i]);
                }
            }
        }
        return temp.length;
    }


    render(){
        return(
            <div>
            <div className="topnav">
                <span id="logo"><IndexLink to="homePage" id="logoText">AirPnP</IndexLink></span>
                <span><Link to="compare" id="compare">compare({this.updateCount("compare")})</Link></span>
                <span><Link to="wishlist" id="wishlist">wishlist({this.updateCount("wishlist")})</Link></span>
                <span><Link to="chat">contact</Link></span>
                <span><Link to="signIn">login</Link></span>
            </div>
            <hr></hr>
            </div>
            
        );
    };

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

export default connect(mapStateToProps, mapDispatchToProps)(Header);