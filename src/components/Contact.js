import React from 'react';
const name = 'Gérard';
const avatar = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg';
const online = false ;

function Contact ({name,avatar,online}){
    return(
        <div className="Contact">
    <img class='avatar' src = {avatar} />
    <div class='status'>
    <div class='name'>{name}</div>
    <span class= {online ? "status-online":"status-offline"}></span>
    <div class='status-text'>{online ? "Online":"Offline"}</div>
      </div>
    </div>
    )
}

export default Contact;