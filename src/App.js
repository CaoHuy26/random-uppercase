import React, { useState } from 'react';
import { Input, Button } from 'antd';
import './App.css';
import transformer from './transformer';

const { TextArea } = Input;

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  
  const onClick = text => {
    const tExT = transformer(text);
    setOutput(tExT);
  }

  return (
    <div
      className="App"
      style={{
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{marginTop: 20, marginBottom: 10}}>
        <img
          src={require('./img/kHaBaNh.jpg')}
          alt='kHaBaNh'
          style={{width: 150}}
        />
        
      </div>
      <TextArea
        style={{width: 400}}
        placeholder='kHÁ bảNh つ sÂn ChƠi giỚi TRẻ...'
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br/>
      <Button type="primary" danger onClick={() => onClick(input)}>
       ấN đi DâN chƠI
      </Button>
      <br/>
      <TextArea
        style={{width: 400}}
        rows={4}
        value={output}
      />
    </div>
  );
}

export default App;
