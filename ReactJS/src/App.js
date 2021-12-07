import { useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import {FaGithub} from "react-icons/fa";
import cat from './cat.gif';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  //Submit Task
  const handleNewTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const handleDelete = (id) => {
    const newTasks = tasks.filter( task => task.id !== id)
    setTasks(newTasks)
  }

  //Edit Task
  const handleEdit = (id, newText, newDate, newReminder) => {
    console.log(id, newText, newDate, newReminder)
    const newTasks = tasks.slice();
    for (const key of Object.keys(newTasks)) {
        if (newTasks[key].id === id) {
          newTasks[key].text = newText;
          newTasks[key].date = newDate;
          newTasks[key].reminder = newReminder;
        }
    }
    setTasks(newTasks)
  }

  return (
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask? <AddTask onSubmit={handleNewTask}/> : ''}
      {tasks.length > 0 
        ? <Tasks tasks={tasks} onDelete={handleDelete} onEdit={handleEdit}/>
        : <div className='inputSection' id='noTask'>
          There is no task to be done!
        </div>}
      <div className='footer'>
        <img id="cat" src={cat} width="150" height="150"/>
        <div>
          Created by Doyeon Guk
          <a href="https://github.com/Jenguk42" target="_blank">
            <FaGithub/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
