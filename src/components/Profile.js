import React from 'react';

const Profile = ({ user }) => {
  const messages = user.messages;
  const userID = user._id;
  
  console.log(user)
  
  return (
    <div>
      <div>
        <h1>Messages from others!</h1>
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            const {username} = message.fromUser;
            const {title} = message.post;
            
            if (userID !== fromUserID) {
              return (
                <div key={message._id} id='postBox'>
                  <p>From User: {username} </p>
                  <p>Message: {message.content}</p>
                  <p>Post Reference: {title}</p>
                </div>
              )
            }
          })    
        }
      </div>
      <div>
        <h1>Messages from You!</h1>
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            const {title} = message.post;
            
            if (userID === fromUserID) {
              return (
                <div id='postBox' key={message._id}>
                  <p>Your Message: {message.content}</p>
                  <p>Post Reference: {title}</p>
                </div>
              )
            }
          })    
        }
      </div>
    </div>
  )
}

export default Profile;