import React from 'react'

const Task1 = () => {
    const names = ["yohana","yeabsra","yeti"]
  return (
    <div>
        
       {names.map((name)=>(
        <p>{name}</p>
       ))}
  
    </div>
  )
}

export default Task1