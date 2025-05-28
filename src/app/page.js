import Container from "@/Components/Container";
import Header from "@/Components/Header";
import PetArea from "@/Components/Pet-area";
import TaskContainer from "@/Components/Tasks-list";

export default function Home() {
  return (
    <div>
      <Header>taskpet</Header>
      <Container className=" flex h-screen justify-evenly" >
        <PetArea />
        <TaskContainer />
      </Container>
      
    </div>
  );
}

//h-screen border flex