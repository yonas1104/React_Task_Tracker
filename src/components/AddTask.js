import React from "react";
import {useState} from 'react'

const AddTask = ({onAdd}) => {

    const [text,setText]=useState('')
     const [day,setDate]=useState('')
      const [reminder,setReminder]=useState(false)

        const onSubmit = (e)=>
        {
e.preventDefault();

            if(!text||!day )
            {
  alert("Hey stop!! Fill the fields")
               
                return ;
            }
             const task={
                    id:Math.floor(Math.random()*10000+1),
                    text,
                    day, reminder
                }

                onAdd(task)
                  setText('')
                setDate('')
              
                setReminder(false)
          

        }


  return (
    <form onSubmit={onSubmit} className="add-form">
      <div className="form-control">
        <label>Add Task</label>
        <input onChange={
            (e)=>
            setText(e.target.value)}  type="text" value={text} placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label>Add Task</label>
        <input onChange={
            (e)=>
            setDate(e.target.value)}  type="date" value={day} placeholder="set date" />
      </div>
      <div className="form-control form-control-check">
             <label>Set reminder</label>
        <input value={reminder}
        checked={reminder}
         onChange={
            (e)=>
            setReminder (e.currentTarget.checked)} className="s" type="checkbox"/>
      </div>
      <input type="submit" className="btn btn-block"/>
    </form>
  );
};

export default AddTask;
