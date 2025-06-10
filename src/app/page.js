"use client";
import { useEffect, useState } from "react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import PetArea from "@/Components/Pet-area";
import TaskContainer from "@/Components/Tasks-list";
import {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
} from "../Services";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(getTasks());
    }, []);

    const handleAdd = (nova) => {
        setTasks(prev => addTask(nova, prev));
    };

    const handleUpdate = (id, updates) => {
        setTasks(prev => updateTask(id, updates, prev));
    };

    const handleDelete = (id) => {
        setTasks(prev => deleteTask(id, prev));
    };

    return (
        <div>
            <Header>taskpet</Header>
            <Container className="flex items-center justify-evenly h-screen" >
                <PetArea addTask={handleAdd}/>
                <TaskContainer
                    tasks={tasks}
                    updateTask={handleUpdate}
                    deleteTask={handleDelete}
                />
            </Container>
        </div>
    )
}

//h-screen border flex

// adicionei "items-center" pra ajustar a posição na tela