import { useState } from "react";
import Button from "../Button";
import Container from "../Container";

export default function ModalTasks({ onClose, onSubmit}) {

    const [ name, setName] = useState('');
    const [ time, setTime ] = useState(''); 

    const addTask = (e) => {
        e.preventDefault();
        onSubmit({ name, time })
        
    }

    return (
        <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center z-50" >
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg w-96" >
                <h2 className="text-xl font-bold mb-4">Criar nova tarefa</h2>

                <form action="" onSubmit={ addTask }>
                    <div className="flex flex-col" >
                        <label htmlFor="">Nome da tarefa</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} className=" border-2" type="text" />
                    </div>

                    <div className="flex flex-col" >
                        <label htmlFor="">Tempo</label>
                        <input value={time} onChange={(e) => setTime(e.target.value)} className=" border-2 " type="text" />
                    </div>
                    
                    <Container className=" flex justify-between " >
                        <Button
                        onClick={onClose} // Ao clicar, executa a função que fecha o modal
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                        >
                        Fechar
                        </Button>

                        <Button
                            type='submit'
                            className=" mt-4 bg-blue-400 text-white px-4 py-2 rounded cursor-pointer"
                        >Salvar tarefa</Button>
                    </Container>

                </form>
                
            </div>
        </div>
    )
}