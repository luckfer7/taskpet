"use client";
import Button from "../Button";
import Container from "../Container";
import Title from "../Title";

export default function TaskContainer({ tasks, editingTask, deleteTask }) {

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
                {tasks.length === 0 ? (
                    <p className="text-gray-600">Nenhuma tarefa ainda.</p>
                ) : (
                    tasks.map((task) => (
                        <div
                            className={`flex justify-between items-center cursor-pointer p-3 w-full rounded-2xl text-white bg-orange-600`}
                            key={task.id}
                            >
                            <span className="font-semibold">{task.name}</span>
                            <span>{task.time}</span>

                            <div className="flex items-center gap-x-7">

                                <svg
                                    onClick={() => editingTask(task)}
                                    className="size-5"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                                
                                <svg
                                    onClick={() => deleteTask(task.id)}
                                    className="size-5"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                             
                            </div>
                        </div>
                    )
                
                ))}
            </div>

        <Button>Ver todas</Button>
       </Container>
    )
}