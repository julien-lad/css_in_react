import styled from 'styled-components';
import assassins from '/src/assets/assassins.jpg';

const Container = styled.div`
    background-color: rgba(218, 219, 140, 0.267);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 50%;
    padding: 2% 2% 0 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;
const Photo = styled.img`
    width: 60%; 
`;
const Title = styled.h1`
    font-size: 1.5em;
`
const History = styled.p`
    text-align: justify;
    width: 80%;
`
const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
    width: 80%;
    background-color: rgba(73, 72, 66, 0.219);
    border-radius: 30px;
`
const Button = styled.div`
    margin: 3%;
`
const Sortie = styled.h2`

`

export function VideoGame() {

    return(
        <Container>
            <Photo src={assassins} />
            <Title>Nouveau Assassin’s Creed Mirage</Title>
            <History>Mirage raconte la jeunesse de Basim. Alors qu’il n’est qu’un voleur des rues, il est recruté par la guilde des assassins. Petit à petit, il y gravit les échelons jusqu’à devenir le personnage que nous connaissons. Cependant, tout n’est pas rose pour notre héros. Il est en effet en proie à des visions cauchemardesques…</History>
            <ContainerButton>
                <Button><button onClick={() =>{window.open('https://www.ubisoft.com/fr-fr/game/assassins-creed/mirage', '_blanck')}}>En savoir plus</button></Button>
                <Button><button onClick={() =>{window.open('https://www.amazon.fr/Ubisoft-ASSASSINS-CREED-MIRAGE-PS5/dp/B0BDZ27513/ref=sr_1_1?keywords=assassin%27s+creed+mirage&qid=1684414805&sr=8-1', '_blanck')}}>Commander</button></Button>
                <Button><button onClick={() =>{window.open('https://www.jeuxvideo.com/jeux/jeu-1628925/tests/', '_blanck')}}>Tests</button></Button>
            </ContainerButton>
            <Sortie>Date de sortie : Octobre 2023</Sortie>
        </Container>
    )
}