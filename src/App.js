import React from 'react';

import './App.css';

function App() {
  var style = {backgroundColor: "white"};
  var date = 1;
   let hours = 1

   let timeofDay
   if (hours == 1) {
     style.backgroundColor = "red"
     timeofDay = "morning"     

   }
   else if (hours == 2) {
    style.backgroundColor = "blue"
     timeofDay= "evening"
     
   }
   else{
    style.backgroundColor = "green"
     timeofDay = "night"
   }
return (
  <h1 style={style}>Good {timeofDay}</h1>
  )
}

export default App;
