import { useState } from "react";
import "./App.css";
import Table from "./Table";
import './App.css'
//get the input from the input element, connect the input to the submit button, on clicking the submit button populate the table

function App(props) {

  //declare a userInput value and set the state of the input elements to empty string
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  // write a function to update the user input according to their name in the input field
  function CollectInput(e) {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  }

  // declare a user array element to store the collected input data
  const [userArray, setUserArray] = useState([]);

  // set the collected input to the userInput
  let { firstName, lastName, phoneNumber } = userInput;

  // write a function of array of the users, adding all the user input to the user to the userarray
  function ArrayOfUsers() {
    setUserArray([...userArray, { firstName, lastName, phoneNumber }]);
    
  }

  // write a function to delete row array in a table
  function DeleteRow(i) {
    let total = [...userArray];
    total.splice(i, 1);
    setUserArray(total);
  }
  return (
    <div className="App">
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={userInput.firstName}
            onChange={CollectInput}
          /><br/>
          <label htmlFor="lastName">lastName</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={userInput.lastName}
            onChange={CollectInput}
          /><br/>
          <label htmlFor="phoneNumber">Phone</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={userInput.phoneNumber}
            onChange={CollectInput}
          /><br/>
        </form><br/>
        <div className='add'>
        <button onClick={ArrayOfUsers} className='add__button'>Add</button>
        </div>
        
        <Table DeleteRow={DeleteRow} userArray={userArray}/>

      </div>
    </div>
  );
}

export default App;
