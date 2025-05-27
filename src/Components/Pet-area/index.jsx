import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import Title from "../Title";

export default function PetArea({  }) {
    return (
        <Container className="border-2 border-amber-200" >
            <Title>Área do pet</Title>
            <Image src="/" width={0} height={0} alt="/" />
            <Button>Iniciar</Button>
        </Container>
            
        
    )
}