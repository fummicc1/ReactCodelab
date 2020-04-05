import React from 'react';
import Form from './Form';
import List from './List';

function App() {
  return (
    <div className="App">
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">ToDoApp</h1>
      <Form/>
      <div className="siimple-rule"></div>
      <List />
      </div>
    </div>
  );
}

export default App;
