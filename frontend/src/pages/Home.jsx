import React from 'react';
import styled from 'styled-components';

function Home() {
  const dataAtual = new Date();
  const dataCompleta = dataAtual.toLocaleDateString('pt-BR'); // Obter a data formatada

  return (
    <HomeContainer>
      <h1>{dataCompleta}</h1>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  h1 {
    color: white;
    text-align: center;
  }
`;
