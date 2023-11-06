import React, { useRef } from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 0 5px;
    border-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: #fff;
    height: 42px;
`;

const Label = styled.div``;

const Form = ({ onEdit }) => {
    const ref = useRef();
  return (
    <FormContainer ref={ref}>
        <InputArea>
            <Label>Nome</Label>
            <Input name="nome" type='text'/>
        </InputArea>
        <InputArea>
            <Label>E-mail</Label>
            <Input name="email" type='email' />
        </InputArea>
        <InputArea>
            <Label>Senha</Label>
            <Input name="senha" type='password' />
        </InputArea>

        <Button type="submit">SALVAR</Button>
    </FormContainer>
  )
}

export default Form
