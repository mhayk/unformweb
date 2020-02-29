/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import './App.css';

import { Button } from '@material-ui/core';
import Input from './components/Form/input';
import MInput from './components/Form/material-ui/Input';


const initialData = {
  email: 'hi@mhayk.com',
};

function App() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Hello World</h1>

      <Form initialData={initialData} onSubmit={handleSubmit}>
        <h3>Form 1</h3>

        <Input name="name" />
        <Input name="email" />
        <Input name="password" type="password" />
        <Input name="address.street" />
        <Input name="address.number" />

        <button type="submit">Send</button>
      </Form>

      <Form initialData={initialData} onSubmit={handleSubmit}>
        <h3>Form 2</h3>

        <MInput name="name" label="Name" helperText="Write your name.." />
        <MInput name="email" label="E-mail" />
        <MInput name="password" label="Password" type="password" />

        <Scope path="address">
          <MInput name="street" label="Street" />
          <MInput name="neighborhood" label="Neighborhood" />
          <MInput name="number" label="Number" />
        </Scope>

        <Button variant="contained" color="primary" type="submit">Send</Button>
      </Form>
    </div>
  );
}

export default App;
