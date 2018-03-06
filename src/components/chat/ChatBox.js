import React from 'react';

export class ChatBox extends React.Component {

    render(){
        let messageArray = this.props.messageArray;
        return messageArray.map(message => (
            <div className='message'><p className='text'>
                {message}
            </p></div>
        ));
    }
}