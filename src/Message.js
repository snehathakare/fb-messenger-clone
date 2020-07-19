import React, { forwardRef } from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message, username}, ref) => {

const isUser = username === message.username;

  return (
    <div ref = {ref} className={`message {$isUser && 'message_user'}`}>
      <Card className={isUser ? "message_user" : "message_guest"}>
        <CardContent>
          <Typography color="white" component="h2" variant="h5">
            {message.username}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
} )

export default Message;
