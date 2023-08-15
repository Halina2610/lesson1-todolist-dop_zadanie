import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./layout/Todolist";
import {tasks1, tasks2, tasks3} from "./components/Tasks";
import {Task, TasksProps} from "./components/Task";

export const App = () => {
    const truck1 = "What to learn"
    const truck2 = "What do you see"
    const truck3 = "What to do"

    const data2: TasksProps = {
        title: "What to learn",
        tasks: [
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true }
        ],
        students: [
            'Rick Kane',
            'Finnlay Bentley',
            'Samia North',
            'Isaac Morton',
            'Safiyah Davey',
            'Ryley Beasley',
            'Kalvin Trejo',
            'Evie-Mae Farrell',
            'Juliet Valencia',
            'Astrid Austin',
            'Lyle Montgomery',
            'Nisha Mora',
            'Kylie Callaghan',
            'Star Wilks',
            'Marissa Colley',
            'Kaif Molloy92',
            'Kamal Broadhurst93',
            'Bianca Ferrell94',
            'Micheal Talbot95',
        ]
    };


    return (
        <div className="App">
            <Todolist truck={truck1} tasks={tasks1}/>
            <Todolist truck={truck2} tasks={tasks2}/>
            <Todolist truck={truck3} tasks={tasks3}/>
            <Task title={data2.title} tasks={data2.tasks} students={data2.students}/>


        </div>
    );
}


