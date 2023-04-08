import style from './AddTask.module.css';
import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface AddTaskProps {
    onAddTask: (taskContent: string) => void;
}

export function AddTask({onAddTask}: AddTaskProps){
    const [taskContent, setTaskContent] = useState("")

    function handleAddTask(event: FormEvent) {
        event.preventDefault();
        onAddTask(taskContent)
        setTaskContent("")
    }

    function handleAddTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setTaskContent(event.target.value)
    }

    function handleInvalidAddTask(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Por favor preencha o campo!")
    }

    return (
        <form onSubmit={handleAddTask} className={style.wrapper}>
            <input type="text" required onInvalid={handleInvalidAddTask} onChange={handleAddTaskChange} placeholder='Adicione uma nova tarefa' value={taskContent}/>
            <button type='submit'>
                <span>Criar</span>
                <PlusCircle size={20}/>
            </button>
        </form>
    )
}