import React, { useState } from 'react'

const TodoList = () => {
    const [activity,setActivity]=useState('')   ;

    const [listdata,setlistdata]=useState([]) ;
   const addactivity = ()=>{
// setlistdata ([...listdata,activity])
// console.log(listdata);
setlistdata((listdata)=>{
    const updatedlist=[...listdata,activity]
   
    setActivity('');
    return updatedlist;
})
    }  
    function removeactivity(i){
        const updatedlistData=listdata.filter((ele,id)=>{
            return i!=id;
            
        })
        setlistdata(updatedlistData)

    }  
    function removeall(){
        setlistdata([]);
    }
  return (
    <div className='container'>
     <div className='header'> Todo List  </div>
     <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}></input> 
      {/* variable to store activity */}
      <button onClick={addactivity}> Add</button>
      <p className='List-heading'> ALL TASKS : </p>
    {listdata!=[] && listdata.map((data,i)=>{
        return (<>
            <p key={i}>
       <div className='listData'>{data}</div>
      <div className='btn-position'> <button onClick={()=> removeactivity(i)}>remove(-)</button></div>
            </p>
        </>)
    })}{listdata.length>=1 &&
 <button onClick={removeall}> remove all</button>}
    </div>
  )
}

export default TodoList