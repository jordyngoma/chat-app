import React from 'react';
const name = 'Gérard';
const avatar = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg';
const online = true ;
function Contact (){
    return(
        <div className="Contact">
    <img class='avatar' src = {avatar} />
    <div class='ajust'>
    <div class='name'>{name}</div>
    
    <div class='status'>{online ? "Online":"Offline"}</div>
      </div>
  </div>
    )
}

export default Contact;