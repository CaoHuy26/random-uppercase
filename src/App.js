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
    <div className="App">
      <TextArea rows={4} value={input} onChange={(e) => setInput(e.target.value)} />
        <br/>
        <Button type="primary" danger onClick={() => onClick(input)}>
          Chuyển đổi
        </Button>
          <br/>
      <TextArea rows={4} value={output} />
    </div>
  );
}

export default App;
