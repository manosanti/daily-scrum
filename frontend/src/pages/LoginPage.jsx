import React from 'react'
import styled from 'styled-components'

function LoginPage() {
  return (
    <LoginFormContainer>
        <LoginFormWrapper>
            <p>Join For Free</p>
            <h2>Unleash the Traveler <SpanAzul>inside YOU</SpanAzul>, enjoy your Dream Vacation</h2>
            <p className='infoText'>get started with the easisest and most secure website to buy travel tickets</p>
        </LoginFormWrapper>
        <LoginMessageWrapper>
            <h2>Create<br></br>new Account<SpanAzul>.</SpanAzul></h2>
            <LoginForm>
                <form>
                    <div>
                        <input type='text' placeholder='First Name'></input>
                        <input type='text' placeholder='Last Name'></input>
                    </div>
                    <div>
                        <input type='text' placeholder='username'></input>
                        <input type='email' placeholder='E-mail'></input>
                        <input type='password' placeholder='password'></input>
                    </div>
                </form>
                <p>Already A member? <a href='#'><SpanAzul>Log In</SpanAzul></a></p>
            </LoginForm>
            <ButtonsGrid>
                <button><a href="">Change Method</a></button>
                <button><a href="">Create Account</a></button>
            </ButtonsGrid>

        </LoginMessageWrapper>
    </LoginFormContainer>
  )
}

export default LoginPage

const SpanAzul = styled.span`
    color: #188DED;
`

const LoginForm = styled.div`
    max-width: 100%;

    input {
        color: #fff;
        border-radius: 20px;
        padding: 15px;
        font-size: 1.2rem;
        margin: 5px 0;
        border: none;
        background-color: var(--gray-dark);

        &:focus {
            outline: 2px solid var(--gray);
        }

        &::focus {
            background-color: blue;
        }
    }

    div:first-child {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
    } 
    div:last-child input {
        width: 100%;
    } 

    p {
        margin: 10px 0;
        color: #fff;
    }
`

const LoginFormContainer = styled.div`
    padding: 0 10%;
    margin: 0 auto;
    place-items: center;
    height: 100vh;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
`

const LoginFormWrapper = styled.div`
    p {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 20px;
    }

    h2 {
        font-size: 43px;
        width: 100%;
    }

    .infoText {
        font-size: 15px;
        font-weight: 400;
        text-transform: capitalize;
    }

    color: #fff;
    max-width: 80%;
`  

const LoginMessageWrapper = styled.div`
    color: #fff;

    h2 {
        font-size: 40px;
        line-height: 40px;
        margin-bottom: 20px;
    }
`

const ButtonsGrid = styled.div`
    justify-content: space-between;
    max-width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-template-rows: 1fr;

    button {
        border-radius: 100px;
        border: none;
        height: 40px;
    }

    button:first-child {
        background-color: #545b69;
    }
    button:last-child {
        background-color: #1d90f4;
    }

    button:first-child a {
        /* background-color: #545b69; */
        text-decoration: none;
        color: white;
    }
    button:last-child a {
        text-decoration: none;
        color: #fff;
        /* background-color: #1d90f4; */
    }
`