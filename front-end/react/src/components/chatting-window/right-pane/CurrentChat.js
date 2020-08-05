import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
//import ChatBubble from 'react-chat-bubble';
import { ChatFeed, Message, ChatBubbleProps } from 'react-chat-ui'

class CurrentChat extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.forceUpdate();
        this.state = {
            messages: this.props.messages,
            force: this.props.force
            // messages: [
                // new Message({
                //     id: 1,
                //     message: "Heyyy",
                // }), // Gray bubble
                // new Message({
                //     id: 0,
                //     message: "Hi, What's up"
                // }), // Blue bubble
                // new Message({
                //     id: 1,
                //     message: "Do you want to watch a movie?",
                // }), // Gray bubble
                // new Message({
                //     id: 0,
                //     message: "Sure! What time?"
                // }), // Blue bubble
                // new Message({
                //     id: 1,
                //     message: "I am free from 8pm onwards. How about you?",
                // }), // Gray bubble
                // new Message({
                //     id: 0,
                //     message: "Sure, I am free around that time too!"
                // }), // Blue bubble
                // new Message({
                //     id: 1,
                //     message: "Do you want to order in dinner as well?",
                // }), // Gray bubble
                // new Message({
                //     id: 0,
                //     message: "Sure, sounds like a perfect plan!! See you then:) "
                // }), // Blue bubble
            // ],
          };
    }

    // componentDidMount() {
    //     this.setState({
    //         messages: this.processInput(this.props.messages)
    //     })
    // }

    processInput = (inProps) => {
        let processes = [];
        console.log('In props');
        console.log(inProps);
        if (!inProps) {
            return processes;
        }
        const name = this.props.username;

        for (let i = 0; i < inProps.length; i++) {
            let currentMessage = inProps[i];
            let id = 0;
            if (currentMessage.from === name) {
                id = 1;
            } else {
                id = 0;
            }
            processes[i].push(
                new Message({
                    id: 1,
                    message: currentMessage.message
                })
            )
        }

        return processes;
    };

   render() {
       console.log(this.props.messages);
       return ( 
           <Container className = {'chat-feed-container'} >
               <ChatFeed
                    messages={this.props.messages} // Boolean: list of message objects
                    isTyping={this.state.force} // Boolean: is the recipient typing
                    hasInputField={false} // Boolean: use our input, or use your own
                    showSenderName // show the name of the user who sent the message
                    bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
                    bubbleStyles= {
                    {  
                        text: {
                            fontSize: 18,
                            color : 'black',
                            fontWeight: 400
                        },
                        chatbubble: {
                            borderRadius: 40,
                            padding: 15,
                           
                        }, 
                    }}         
                />
           </Container>
    )
   
  }
}
export default CurrentChat;
