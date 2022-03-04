import React from 'react'




const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {

  
  return (
    <div id="main">
     
       <input type="text" name="text" id="search-input" value={searchArray}/>
    
    </div>
  )
}


export default App;
