import React,{memo}  from 'react'


const Child = (props) => {
   
   console.log("Child called")
  return (
    <div>
        
    </div>
  )
}

export default memo(Child)