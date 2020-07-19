import React, { useState, useEffect } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './App.css';
import Message from './Message';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState([]);
  
  useEffect(() => {
    setUsername(prompt('Please enter your name'))

  }, [])

  const sendMessage = (event) => {
    //all logic to send messages goes here
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
    <h1>Facebook Messenger!</h1>
    <h2>Welcome {username}</h2>
    <form>
      <FormControl>
        <InputLabel htmlFor="my-input">Enter message here...</InputLabel>
        <Input id="my-input" value= {input} onChange = {event => setInput(event.target.value)} aria-describedby="my-helper-text" />
        <Button type='submit' disabled={!input} variant="contained" color="primary" onClick={sendMessage} >Send message</Button>
      </FormControl>
    </form>

    {
      messages.map(message => (
        <Message username = {username} message = {message}/>
      ))
    }
    </div>
  );
}

export default App;
