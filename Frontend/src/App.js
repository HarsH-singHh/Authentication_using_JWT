import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [cities, setCities] = useState([]);

  useEffect(()=>{

    fetch("http://localhost:3001/cities")
    .then((res)=>res.json())
    .then((res)=>setCities(res))
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))

  },[]);


  return (
    <div className="App">
      
    <h1>CITIES LIST</h1>

    <div className='cities-wrapper'>
      {

        cities.map((element,index) => {
          return(
          <div className='city-div' key={index}>
            <p>{`City : ${element.name}`}</p>
            <p>{`State : ${element.state}`}</p>

          </div>
          
          
          )
        })

      }
    </div>



    </div>
  );
}

export default App;


