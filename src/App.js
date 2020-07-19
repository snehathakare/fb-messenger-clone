import React, { useState, useEffect } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import Logo from './images/Logo.png';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState([]);

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc=>({id: doc.id, message: doc.data()})))
    })

  }, [])
  
  useEffect(() => {
    setUsername(prompt('Please enter your name'))

  }, [])

  const sendMessage = (event) => {
    //all logic to send messages goes here
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
    <img src={require('./images/Logo.png')} width="100" height="100"/>
    
    <h1>Facebook Messenger!</h1>
    <h2>Welcome {username}</h2>

    <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="Type a message..." id="my-input" value= {input} onChange = {event => setInput(event.target.value)} aria-describedby="my-helper-text" />
        
        <IconButton className="app__iconButton" type='submit' disabled={!input} variant="contained" color="primary" onClick={sendMessage} >
          <SendIcon />
        </IconButton>
        
      </FormControl>
    </form>

    <FlipMove>
    {
      messages.map(({id, message}) => (
        <Message key={id} username = {username} message = {message}/>
      ))
    }
    </FlipMove>

    </div>
  );
}

export default App;
