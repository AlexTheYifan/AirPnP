import React from "react";
import {ChatBox} from "./ChatBox"
import "../../styles/Chat.css"

class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state = {messageArray: [],
                      inputValue: ""};
        this.updateMessage = this.updateMessage.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    updateInputValue(e){
        this.setState({inputValue: e.target.value});
    }

    updateMessage(){
        var message = this.state.inputValue;
        this.setState({messageArray: [...this.state.messageArray, message],
                       inputValue: ""});
    }


    render(){
        return (
            <div id="right">
                <div id="container">
                    <div id="chatDisp"><ChatBox messageArray={this.state.messageArray} /></div>
                    <div id="input">
                            <label id="sendMessage" onClick={this.updateMessage}>Submit</label>
                            <input value={this.state.inputValue} id="messageInput" type="text" onChange={this.updateInputValue}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;