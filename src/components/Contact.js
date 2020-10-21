import React from 'react';
const name = 'Gérard';
const avatar = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg';
const online = false ;

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      online:false
    };
  }
  render(){
    return(
        <div className="Contact">
    <img class='avatar' src = {this.props.avatar} />
    <div class='status'>
    <div class='name'>{this.props.name}</div>
    <span class= {this.state.online ? "status-online":"status-offline"}></span>
    <div class='status-text' onClick = { event => {
      const newOnline = !this.state.online;
      this.setState({ online : newOnline });
    }}
    >{this.state.online ? "Online":"Offline"}</div>
      </div>
    </div>
    )
    }
}

export default Contact;
