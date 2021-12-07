import { useState } from 'react'
import Button from './Button'
import React from 'react'
import {FaEllipsisH, FaTrashAlt, FaEdit, FaCheck} from "react-icons/fa"

const Task = ({task, onDelete, onEdit}) => {
  const [status, setStatus] = useState(null);
  const [showIcons, setShowIcons] = useState(false);

  const [editDate, setEditDate] = useState(task.date);
  const [editReminder, setEditReminder] = useState(task.reminder);
  const [editText, setEditText] = useState(task.text);

  const editClicked = () => {
    if (!editText) {
      alert('Please add a task!')
      return
    }

    setStatus('editDone');
    onEdit(task.id, editText, editDate, editReminder);
  }

  return (
    <>
      {status === 'isDone' ?
        <div className = 'elementContent' id = 'taskdone'>
          <div>{task.text}</div>
          <div className='date'>{task.date.replace('T', ' ')}</div>
        </div>
        : (status === 'editing' ?
          <div className = 'taskElement' id = 'editSection'>
            <input type='text' 
              id = 'editText'
              value={editText}
              onChange = {(e)=>setEditText(e.target.value)}></input>
            <input type='datetime-local'
              id='editDate'
              value={editDate}
              onChange = {(e)=>setEditDate(e.target.value)}></input>
            <span id='editReminder'>
              <label style={{marginLeft: 5, marginRight: 30}}>Reminder</label>
              <input type='checkbox'
                value={editReminder}
                checked={editReminder}
                onChange = {(e)=>setEditReminder(!editReminder)}></input>
            </span>
            <span id='editBtn'>
              <Button
                text='Save'
                onClick={editClicked}></Button>
            </span>
          </div>
          :
          <div className= 'taskElement' id={`${task.reminder? 'reminderTask' : 'noReminderTask'}`}>
            <div id='elementContent'>
              <div>{task.text}</div>
              {task.date && <div className='date'>{task.date.replace('T', ' ')}</div>}
            </div>
              <div id='elipse'>
                <FaEllipsisH onClick={()=>setShowIcons(!showIcons)}/>
              </div>
            {showIcons &&
              <div id='icons'>
                <FaTrashAlt onClick={()=>onDelete(task.id)}/>
                <FaEdit onClick={()=>setStatus('editing')}/>
                <FaCheck onClick={()=>setStatus('isDone')}/>
              </div>
            }
          </div>
        )
      }
    </>
  )
}

export default Task
