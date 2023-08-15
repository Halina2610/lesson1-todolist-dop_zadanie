import React from 'react';
import {Button} from "./Button";

type Tasks = {
    id: number;
    title: string;
    isDone: boolean;
};

export type TasksProps = {
    title: string;
    tasks: Tasks[];
    students: string[];
};


export const Task = (props: TasksProps) => {
    return (
        <div className="Todolist">
            <h3>{props.title}</h3>
            <div>
                <input/>
                <Button title={"+"}/>
            </div>
            <ul>
                {props.tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone} />
                        <span>{task.title}</span>
                    </li>
                ))}
            </ul>
            <h3>Students:</h3>
            <ul>
                {props.students.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
            </ul>
            <div>
                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
    );
};

