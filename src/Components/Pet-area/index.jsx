'use client'
import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import Title from "../Title";
import gato from "../../../public/gifcat.gif"
import TasksModal from "../Tasks-modal";
import { useState } from "react";

export default function PetArea({  }) {

     const [ModalOpen, setOpenModal] = useState(false);
    const [tarefas, setTarefas] = useState([]);

    const criarTarefa = () => {
        setOpenModal(true);
    }

    const fecharModal = () => {
        setOpenModal(false);
    }

    return (
        <Container className="border-4 border-blue-300 rounded-2xl w-sm h-[77%] flex flex-col items-center justify-center gap-3 " >
            <Title className=" font-semibold text-3xl text-gray-600 " >Área do pet</Title>
            <Image src={gato} width={250} height={250} alt=" imagem de um gato dormindo em cima de um sino" />
            <Button 
                onClick= { criarTarefa }
                { ... ModalOpen && <TasksModal /> }
            className=" border-3 border-gray-600 bg-gray-500 px-20 py-3 rounded-2xl text-amber-50 text-2xl font-semibold cursor-pointer" >Iniciar</Button>
        </Container>
            
        
    )
}