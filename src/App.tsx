import { Header } from './components/Header/Header';
import { AddTask } from './components/AddTask/AddTask';

import style from './App.module.css';
import './global.css';
import { TaskList } from './components/TaskList/TaskList';
import { TaskInterface } from './components/Task/Task';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([])

  function addTask(task:string) {
    setTasks([...tasks, {
      id: String(task.length),
      content: task,
      checkValueProp: false
    }])
  }

  function changeValue(id:string) {
    const updateTasksArray = tasks.map(task => {
      if (task.id === id) {
        return {...task, checkValueProp: !task.checkValueProp}
      }
      return task
    })

    setTasks(updateTasksArray)
  }

  function deleteTask(id:string) {
    const removedTasksArray = tasks.filter(task => {
      if (task.id !== id) {
        return task
      }
    })

    setTasks(removedTasksArray)
  }

  return (
    <>
      <Header/>
      <div className={style.wrapper}>
        <AddTask onAddTask={addTask} />
        <TaskList tasks={tasks} onChangeValue={changeValue} onDeleteValue={deleteTask}/>
      </div>
    </>
  )
}

export default App
