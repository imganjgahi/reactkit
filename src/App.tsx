import React from 'react';
import './App.css';
import Form, { FormItem } from './Components/Form/Form'
import MultiSelect from './Components/MultiSelect/MultiSelect';
import Select from './Components/Select/Select';
const fakeData = [
  { id: "1", title: "Red" },
  { id: "2", title: "Green" },
  { id: "3", title: "Blue" },
  { id: "4", title: "Yellow" },
  { id: "5", title: "Purple" },
  { id: "6", title: "Orange" },
]
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

          <FormItem name="optionList"
            initialValue="5,2"
            rules={[{ required: true, msg: "optionList is require" }]}
            component={ <MultiSelect optionList={fakeData} />} />
          <FormItem name="Select" label="User Select"
            initialValue="2"
            rules={[{ required: true, msg: "Select is require" }]}
            component={ <Select optionList={fakeData} />} />
  
        <button>Submin</button>
      </Form>
    
    </div>
  );
}

export default App;
