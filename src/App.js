import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState(0);
  const [planner, setPlanner] = useState([])
  const addPlannerFn = () => {
    if (subject === "" || hour === 0) {
      alert("please fill the subject and hour")
    }
    else {
      setPlanner([...planner, { subjectInput: subject, hourInput: hour }])
    }



  };

  const OnChangeHandler = (e, fun) => {


    fun(e.target.value)


  };
  const incrementHour = (index) => {
    setPlanner((prevPlanner) => {
      const updatedPlanner = [...prevPlanner]
      updatedPlanner[index] = {
        ...updatedPlanner[index],
        hourInput: parseInt(updatedPlanner[index].hourInput, 10) + 1
      };
      return updatedPlanner;

    });

  };

  const decrementHour = (index) => {
    setPlanner((prevPlanner) => {
      const updatedPlanner = [...prevPlanner]
      updatedPlanner[index] = {
        ...updatedPlanner[index],
        hourInput: parseInt(updatedPlanner[index].hourInput, 10) - 1
      };
      return updatedPlanner;

    });

  };

  return (
    <div className='main'>
      <div className="card_container">


        <h1 style={{color:"blue"}}>Geekster Education Planner</h1>
        <div className='input_container'>
          <input id='subject' type='text' placeholder='Subject' value={subject} onChange={(e) => OnChangeHandler(e, setSubject)}></input>
          <input id='number' type='number' placeholder='Hour' value={hour} onChange={(e) => OnChangeHandler(e, setHour)}></input>
          <button id='add' onClick={addPlannerFn}>Add</button>
        </div>


        {
          planner.map((ele, index) => {
            return <div className='plusminus'>
              {ele.subjectInput}   {ele.hourInput}Hours
              <button id='plus' onClick={() => incrementHour(index)}>+</button>
              <button id='minus' onClick={() => decrementHour(index)}>-</button>
            </div>
          })
        }

      </div>
    </div>

  );
}

export default App;
