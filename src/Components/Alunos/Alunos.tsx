import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { Container, List, Title, Subtitle } from './Alunos.style';

type Aluno = {
  name: string;
  turma: number;
}

export default function Aluno() {
  const [aluno, setAluno] = useState<Aluno[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3333/alunos')
      .then(response => {
        setAluno(response.data)
      })
  }, [])


  return (
    <>
      <Header />
      <Container>
        <>
          {aluno.map(aluno => {
            return (
              <List key={aluno.name}>
                <Title>{aluno.name}</Title>
                <Subtitle>{aluno.turma}</Subtitle>
              </List>
            )
          })}
        </>
      </Container>
      <Footer />
    </>
  )
}