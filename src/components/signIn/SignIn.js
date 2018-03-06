import React from "react";
import "../../styles/SignIn.css"
import { Link } from 'react-router';

class SignIn extends React.Component{
    render(){
        return (
            <div className="log-form">
                <h2>Login to your account</h2>
                <form>
                    <input type="text" title="username" placeholder="username" />
                    <input type="password" title="username" placeholder="password" />
                    <Link to="homePage" className="btn1">Login</Link>
                    <a className="forgot" href="#">Forgot Username?</a>
                </form>
            </div>
        );
    }
}

export default SignIn;