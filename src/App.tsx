import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./layout/Todolist";
import {Task, TasksProps} from "./components/Task";

export const App = () => {
    const truck1 = "What to learn"
    const tasks1: TaskType[] = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS", isDone: false}
    ]

    const truck2 = "What do you see"
    const tasks2: TaskType[] = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]


    const truck3 = "What to do"
    const tasks3: TaskType[] = [
        {id: 1, title: "HTML&CSS2", isDone: true},
        {id: 2, title: "JS2", isDone: true},
        {
            id: 3, title: "Students", isDone: false, students: [
                'Jago Wormald1',
                'Saul Milne2',
                'Aariz Hester3',
                'Dion Reeve4',
                'Anisa Ortega5',
                'Blade Cisneros6',
                'Malaikah Phelps7',
                'Zeeshan Gallagher8',
                'Isobella Vo9',
                'Rizwan Mathis10',
                'Menaal Leach11',
                'Kian Walton12',
                'Liyana Harris',
                'Kashif Blackburn',
                'Atif Zimmerman',
                'Sila Hartley',
                'Ralphie Hebert'
            ]
        }
    ]


    const data2: TasksProps = {
        title: "What to learn",
        tasks: [
            {id: 1, title: "HTML&CSS", isDone: true},
            {id: 2, title: "JS", isDone: true}
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


