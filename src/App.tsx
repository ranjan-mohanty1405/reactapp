import React from 'react';
import './App.css';
import Person from './person';
import { iperson } from './iperson';

const personData: iperson = {
  tabledata: [
    { name: 'Ranjan', 
      age: 32, 
      mobile: '987654310', 
      email: 'test@gmail.com', 
      ads: 'address1',
      landamrkdata:
      [{lname:'landmark1'},{lname:'landmark2'}] },
    { name: 'Arabinda',
       age: 24,
        mobile: '7898765421', 
        email: 'test1@gmail.com', 
        ads: 'address12',
        landamrkdata:
        [{lname:'landmark3'},{lname:'landmark4'},{lname:'landmark5'}] }
  ],
};

function App() {
  return (
    <div className="App">
      <Person person={personData} />
    </div>
  );
}

export default App;
