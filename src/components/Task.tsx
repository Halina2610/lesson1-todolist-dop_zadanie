import React from 'react';
import {Button} from "./Button";


// Hi Guys!
// Let's reinforce our current session!
// -You have 2 arrays. You should create a new component TASKS, where you will render these arrays.
// -Don't forget to assign types to our data.

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

