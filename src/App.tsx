import React from 'react';
import './App.css';
import Form, { FormItem } from './Components/Form/Form'
const App: React.FC = () => {
  const submitHandler = (values: any, err: any) => {
    console.log(values, "ERR: ", err);
  }
  return (
    <div className="App">
      <Form onSubmit={(values: any, err: any) => submitHandler(values, err)}>
      <FormItem label="User Name"
            name="firstName"
            initialValue="Mehran"
            rules={[{ required: true, msg: "filed is require" }]}
            component={<input className="txtInput" id="baghali" type="text" />} />

          <FormItem name="lastName"
            rules={[{ required: true, msg: "lastName is require" },
            { max: 3, msg: "max lenght 3" }]}
            component={<input className="txtInput" type="text" onChange={(e) => console.log("Input Changed", e.target.name)} />} />
  
        <button>Submin</button>
      </Form>
    
    </div>
  );
}

export default App;
