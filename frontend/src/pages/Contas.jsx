import React, { useState } from 'react';
import styled from 'styled-components';
// import ContasButton from '../assets/Components/ContasButton';

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  color: white;
`;

const Saldo = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const GastoItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  padding: 2px 8px;
  border: none;
  cursor: pointer;
`;

const Contas = () => {
  const [saldoInicial, setSaldoInicial] = useState('');
  const [saldoExtra, setSaldoExtra] = useState('');
  const [saldo, setSaldo] = useState(0);
  const [gastos, setGastos] = useState([]);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

  const addGasto = (e) => {
    e.preventDefault();
    setGastos([...gastos, { nome, valor: parseFloat(valor) }]);
    setSaldo(saldo - parseFloat(valor));
    setNome('');
    setValor('');
  };

  const removeGasto = (index) => {
    const novoSaldo = saldo + gastos[index].valor;
    setSaldo(novoSaldo);
    const novoArrayGastos = gastos.filter((_, i) => i !== index);
    setGastos(novoArrayGastos);
  };

  const handleInitialValueSubmit = (e) => {
    e.preventDefault();
    const saldoInicialFloat = parseFloat(saldoInicial);
    const saldoExtraFloat = parseFloat(saldoExtra);
    const totalSaldo = saldoInicialFloat + saldoExtraFloat;
    setSaldo(totalSaldo);
  };

  return (
    <Container>
      <h1>Qual o valor inicial?</h1>
      <Form onSubmit={handleInitialValueSubmit}>
        <Input
          type="number"
          step="0.01"
          placeholder="Saldo inicial"
          value={saldoInicial}
          onChange={(e) => setSaldoInicial(e.target.value)}
        />
        <Input
          type="number"
          step="0.01"
          placeholder="Valor extra"
          value={saldoExtra}
          onChange={(e) => setSaldoExtra(e.target.value)}
        />
        <button type="submit">Adicionar Valor Inicial</button>
      </Form>
      <Saldo>Saldo disponível: R$ {saldo.toFixed(2)}</Saldo>
      <Form onSubmit={addGasto}>
        <Input
          type="text"
          placeholder="Nome do gasto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="number"
          step="0.01"
          placeholder="Valor do gasto"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button type="submit">Adicionar Gasto</button>
      </Form>
      {gastos.map((gasto, index) => (
        <GastoItem key={index}>
          <p>
            {gasto.nome} | R$ {gasto.valor.toFixed(2)}
          </p>
          <RemoveButton onClick={() => removeGasto(index)}>Remover</RemoveButton>
        </GastoItem>
      ))}
      {/* <ContasButton
        imageURL='https://cdn-icons-png.flaticon.com/128/3562/3562056.png'
        imageALT='imagem de uma calculadora'
      /> */}
    </Container>
  );
};

export default Contas;