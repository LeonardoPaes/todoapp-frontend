import style from './TaskList.module.css';
import clipboardIcon from '../../assets/clipboard-icon.svg'
import { Task, TaskInterface } from '../Task/Task';

interface TaskListProps {
    tasks: TaskInterface[];
    onChangeValue: (id: string) => void;
    onDeleteValue: (id: string) => void;
}

export function TaskList({tasks, onChangeValue, onDeleteValue}: TaskListProps) {
    return (
        <div className={style.wrapper}>
            <header>
                <div>
                    <span>Tarefas criadas</span>
                    <strong>{tasks.length}</strong>
                </div>
                <div>
                    <span>Concluídas</span>
                    <strong>{tasks.filter(task => task.checkValueProp != false).length} de {tasks.length}</strong>
                </div>
            </header>
            <article className={tasks.length == 0 ? style.wrapperWithoutTasks : ""}>
                {
                    tasks.length > 0 
                    ?
                    tasks.map(task => {
                        return <Task key={task.id} id={task.id} checkValueProp={task.checkValueProp} content={task.content} onChangeValue={onChangeValue} onDeleteValue={onDeleteValue}/>
                    })
                    :
                    <>
                        <img src={clipboardIcon} />
                        <div className={style.warningWrapper}>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </>
                }
            </article>
        </div>
    )
}