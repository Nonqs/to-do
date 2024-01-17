import {  useState } from 'react'
import './App.css'
import { Edit } from './components/Edit'


function App() {

  
  const [currentValue, setCurrentValue] = useState()
  const [list, setList] = useState([])
 
 

  const handleClick = () => {
    
    if(list.includes(currentValue) || currentValue == undefined || currentValue == ""){
    return
    }else{
    setList([...list, currentValue])
    return
    }
  }

  
  const handleChange = (event) => {
    setCurrentValue(event.target.value)
  }

  const handleDeleteTask = (index) => {
    
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };




  return (
    <>
      <body>


        <header>
          <h1 className='title'>To-do list</h1>
        </header>
        <div className='add'>
          <input className='buttons' type="text" placeholder='To-do...' onChange={handleChange} />
          <button className='buttons' onClick={handleClick}>+</button>


        </div>
        <section >
          {list.map((res, index) =>(   
            <Edit key={res} res = {res} onDelete={() => handleDeleteTask(index)} />
          ))
          }
        
        </section>

      </body>

    </>

  )
}

export default App
