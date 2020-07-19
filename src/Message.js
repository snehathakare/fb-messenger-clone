import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import './Message.css';

function Message({message, username}) {

const isUser = username === message.username;

  return (
    <div className={`message {$isUser && 'message_user'}`}>
      <Card className={isUser ? "message_user" : "message_guest"}>
        <CardContent>
          <Typography color="white" component="h2" variant="h5">
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
