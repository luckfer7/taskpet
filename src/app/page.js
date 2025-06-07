"use client";
import { useState } from "react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import PetArea from "@/Components/Pet-area";
import TaskContainer from "@/Components/Tasks-list";

export default function Home() {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        setTasks((prev) => [...prev, task])
    }

    return (
        <div>
            <Header>taskpet</Header>
            <Container className="flex items-center justify-evenly h-screen" >
                <PetArea addTask={addTask}/>
                <TaskContainer tasks={tasks} />
            </Container>
        </div>
    )
}

//h-screen border flex

// adicionei "items-center" pra ajustar a posição na tela