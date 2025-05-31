import Button from "../Button";
import Container from "../Container";
import Title from "../Title";

export default function TaskContainer ({}) {
    return(
       <Container className=" border-2 border-b-fuchsia-900 flex flex-col " >
            <Title>Lista de tarefas</Title>
                <button
                    className='btn btn-primary w-full'>
                    Adicionar Tarefa
                </button>
        <Button>Ver todas</Button>
       </Container>
    )
}