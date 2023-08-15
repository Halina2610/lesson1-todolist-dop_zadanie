import React from 'react';
import {Button} from "../components/Button";


type TodolistPropsType = {
    truck: string
    tasks: TaskType[] // или запись Array<TaskType> // обе записи корректны

}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
    students?: string[] | undefined
}

type Task = {
    id: number;
    title: string;
    isDone: boolean;
};

type TasksProps = {
    title: string;
    tasks: Task[];
    students: string[];
};


export const Todolist = (props: TodolistPropsType) => {
    return (
        <div className="Todolist">
            <h3>{props.truck}</h3>
            <div>
                <input/>
                <Button title={"+"}/>
            </div>
            <ul>
                {props.tasks.map(el=>{
                    return (
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })}

                {/*<li>передаем в пропсах через функцию мап*/}
            </ul>
            <ol>
                {props.tasks[2]?.students && props.tasks[2].students.map(el => {
                    return typeof el === 'string' ? (
                        <li key={el}>{el}</li>
                    ) : null;
                })}
            </ol>
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
    );
};
