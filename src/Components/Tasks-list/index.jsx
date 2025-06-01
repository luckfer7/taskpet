import Button from "../Button";
import Container from "../Container";
import Title from "../Title";

export default function TaskContainer ({}) {
    return(
<<<<<<< HEAD
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
                h-200
            ">

            <Title className="text-center font-semibold text-2xl mt-3 mb-3 border-3 border-orange-400 rounded-2xl w-70 ">Lista de tarefas</Title>

            <div
                className="
                    flex
                    justify-between
                    items-center
                    text-white 
                    cursor-pointer
                    bg-orange-700
                    p-3
                    w-full
                    rounded-2xl
                ">
                <p className="font-semibold">Tarefa 1</p>
                <div className="flex items-center gap-x-4">
                    <p className="text-x1"> EDITAR </p>
                    <p className="text-x1"> X </p>
                </div>
            </div>

=======
       <Container className=" border-2 border-b-fuchsia-900 flex flex-col " >
            <Title>Lista de tarefas</Title>
                <button
                    className='btn btn-primary w-full'>
                    Adicionar Tarefa
                </button>
>>>>>>> 3d7aa89cdc219166a934dd1c5d0660c28249c037
        <Button>Ver todas</Button>
       </Container>
    )
}