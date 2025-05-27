import Button from "../Button";
import Container from "../Container";
import Title from "../Title";

export default function TaskContainer ({}) {
    return(
       <Container className=" border-2 border-b-fuchsia-900 " >
        <Title>Lista de tarefas</Title>
        <Container></Container>
        <Button>Ver todas</Button>
       </Container>
    )
}