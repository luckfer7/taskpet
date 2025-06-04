"use client";
import { useState } from "react";
import Container from "@/Components/Container";
import Header from "@/Components/Header";
import PetArea from "@/Components/Pet-area";
import TaskContainer from "@/Components/Tasks-list";

export default function Home() {
    const [selectedTask, setSelectedTask] = useState(null)

    return (
        <div>
            <Header>taskpet</Header>
            <Container className="flex items-center justify-evenly h-screen" >
                <PetArea selectedTask={selectedTask}/>
                <TaskContainer onTaskSelected={setSelectedTask }/>
            </Container>
        </div>
    )
}

//h-screen border flex

// adicionei "items-center" pra ajustar a posição na tela