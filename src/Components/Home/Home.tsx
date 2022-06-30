import { Text, Container, HomePage, Title, Description, Subtitle, Button } from './Home.style'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Alunos from '../Alunos/Alunos'

export default function Home() {
    return (
        <Router>
            <Container>
                <HomePage>
                    <Text>School</Text>
                    <Description>
                        <Title>Descrição:</Title>
                        <Subtitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Deleniti fugiat, ipsum recusandae in facere accusantium earum nobis laudantium quasi nesciunt.</Subtitle>
                        <Button>
                            <Link to="/alunos" style={{textDecoration: 'none', color: '#fff'}}>
                                Alunos
                            </Link>
                        </Button>
                    </Description>
                </HomePage>
            </Container>
            <Routes>
                <Route path="/alunos" element={<Alunos />} />
            </Routes>
        </Router>
    )
}