import React, { useState } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './App.css';
import Message from './Message';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  
  console.log(input)
  console.log(messages)

  const sendMessage = (event) => {
    //all logic to send messages goes here
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
    <h1>Facebook Messenger!</h1>
    
    <form>
      <FormControl>
        <InputLabel htmlFor="my-input">Enter message here...</InputLabel>
        <Input id="my-input" value= {input} onChange = {event => setInput(event.target.value)} aria-describedby="my-helper-text" />
        <Button type='submit' disabled={!input} variant="contained" color="primary" onClick={sendMessage} >Send message</Button>
      </FormControl>
    </form>

    {
      messages.map(message => (
        <Message text = {message}/>
      ))
    }
    </div>
  );
}

export default App;
