import React from 'react'
import styled from 'styled-components'

function LoginPage() {
  return (
    <ContainerLogin>
        <LoginWrapper>
            
        </LoginWrapper>
        <LoginMessageWrapper>
            <p>Join For Free</p>
            <h2>Unleash the Traveler <span>inside YOU</span>, enjoy your Dream Vacation</h2>
            <p className='infoText'>Join For Free, you know that my boy common</p>
            <ButtonsGrid>
                <button><a href="">teste 1</a></button>
                <button><a href="">teste 2</a></button>
            </ButtonsGrid>
        </LoginMessageWrapper>
    </ContainerLogin>
  )
}

export default LoginPage

const ContainerLogin = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
`

const LoginWrapper = styled.div`

`  

const LoginMessageWrapper = styled.div`

`

const ButtonsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;

    a:first-child {
        text-decoration: none;
        color: white;
    }
`