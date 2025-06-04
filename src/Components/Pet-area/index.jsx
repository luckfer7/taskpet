"use client";
import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import Title from "../Title";
import gato from "../../../public/gifcat.gif"

export default function PetArea({ selectedTask }) {
    const isActive = selectedTask !== null;
    const handleClick = () => {
        // adicionar a lógica para iniciar a tarefa selecionada
        console.log("Tarefa iniciada:", selectedTask);
    };
    return (
        <Container className="border-4 border-blue-300 rounded-2xl w-sm h-[77%] flex flex-col items-center justify-center gap-3 " >
            <Title className=" font-semibold text-3xl text-gray-600 " >Área do pet</Title>
            <Image src={gato} width={250} height={250} alt=" imagem de um gato dormindo em cima de um sino" />

            <Button
                disabled={!isActive}
                className={`border-3 border-gray-600 bg-gray-500 px-20 py-3 rounded-2xl text-amber-50 text-2xl font-semibold ${isActive ? "bg-green-600" : "bg-gray-400"}`}
            >
                {isActive ? "Iniciar" : "Iniciar"}
            </Button>
        </Container>
            
        
    )
}