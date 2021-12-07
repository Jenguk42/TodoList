import { useState } from 'react'
import Button from './Button'

const AddTask = ({onSubmit}) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const clickedSubmit = (e) => { 
        e.preventDefault()
        
        if (!text) {
            alert('Please add a task!')
            return
        }

        onSubmit({text, date, reminder})
        setText('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className='inputSection'>
            <div className='input-control'>
                <label>Task</label>
                <input type='text' 
                    value={text}
                    className='taskContext'
                    placeholder='Enter your task'
                    onChange = {(e)=>setText(e.target.value)}
                ></input>
            </div>
            
            <div className='input-control'>
                <label>Date</label>
                <input type='datetime-local'
                    value={date}
                    className='taskDate'
                    onChange = {(e)=>setDate(e.target.value)}
                ></input>
            </div>

            <div className='input-control' id='reminder'>
                <label>Reminder</label>
                <input type='checkbox'
                    value = {reminder}
                    checked= {reminder}
                    onChange = {(e)=>setReminder(!reminder)}
                ></input>
            </div>

            <div className='input-control'>
                <Button 
                    text='Submit'
                    onClick={clickedSubmit}
                ></Button>

            </div>
        </form>
    )
}

export default AddTask
