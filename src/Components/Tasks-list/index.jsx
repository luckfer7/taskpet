"use client";
import Button from "../Button";
import Container from "../Container";
import Title from "../Title";
import React, { useState } from "react";

export default function TaskContainer({ onTaskSelected }) {
    const [selectedTask, setSelectedTask] = useState(null)
    const handleClick = (task) => {
        const newTask = selectedTask === task ? null : task;
        setSelectedTask(newTask);
        onTaskSelected(newTask)
    }

    const tasks = [{
        name: "Estudar React",
        time: "02:00",
    }, {
        name: "Estudar Next.js",
        time: "01:30",
    }, {
        name: "Estudar Tailwind CSS",
        time: "01:00",
    }]

    return(
        <Container
            className="
                w-150
                p-3
                bg-orange-200
                border-4
                border-orange-400
                flex
                flex-col
                items-center
                gap-2
                rounded-2xl
                h-170
            ">

            <Title className="text-center font-semibold text-2xl mt-3 mb-3 border-3 border-orange-400 rounded-2xl w-70 ">Lista de tarefas</Title>

            <div className="flex flex-col gap-2 w-full items-center">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`
                        flex justify-between items-center cursor-pointer p-3 w-full rounded-2xl text-white
                        ${selectedTask === index ? 'bg-orange-700' : 'bg-orange-600'}`}
                    >
                        <span className="font-semibold">{task.name}</span>
                        <span>{task.time}</span>
                        <div className="flex items-center gap-x-4">
                            <p className="text-x1">EDITAR</p>
                            <p className="text-x1">X</p>
                        </div>
                    </div>
                ))}
            </div>

        <Button>Ver todas</Button>
       </Container>
    )
}