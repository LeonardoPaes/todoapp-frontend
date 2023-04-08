import style from './Task.module.css';
import { Trash, Check } from 'phosphor-react'
import { useState } from 'react';

export interface TaskInterface {
    id: string;
    checkValueProp?: boolean;
    content: string;
}

export interface TaskProps {
    id: string;
    checkValueProp?: boolean;
    content: string;
    onChangeValue: (id: string) => void;
    onDeleteValue: (id: string) => void;
}

export function Task({id, checkValueProp = false, content, onChangeValue, onDeleteValue}: TaskProps) {
    function handleChangeValue() {
        onChangeValue(id)
    }

    function handleDeleteValue() {
        onDeleteValue(id)
    }

    return (
        <div className={checkValueProp == true ? `${style.taskWrapper} ${style.taskDoneWrapper}` : style.taskWrapper} >
            <label htmlFor={id}>
                <input id={id} type="checkbox" onChange={handleChangeValue} checked={checkValueProp}/>
                <Check/>
            </label>
            <span>{content}</span>
            <button onClick={handleDeleteValue}><Trash size={20}/></button>
        </div>
    )
}