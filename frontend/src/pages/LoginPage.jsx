import React from 'react'
import styled from 'styled-components'

function LoginPage() {
  return (
    <LoginFormContainer>
        <LoginFormWrapper>
            
        </LoginFormWrapper>
        <LoginMessageWrapper>
            <p>Join For Free</p>
            <h2>Unleash the Traveler <span>inside YOU</span>, enjoy your Dream Vacation</h2>
            <p className='infoText'>Join For Free, you know that my boy common</p>
            <LoginForm>
                <form>
                    <div>
                        <input type='text' placeholder='First Name'></input>
                        <input type='text' placeholder='Last Name'></input>
                    </div>
                    <div>
                        <input type='email' placeholder='Email'></input>
                        <input type='password' placeholder='password'></input>
                    </div>
                </form>
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

const LoginForm = styled.div`
    max-width: 80%;

    input {
        font-size: 1.2rem;
        margin: 4px 0;
        border: none;
        background-color: var(--gray-dark);
    }

    div:first-child input {
        width: 50%;
    } 
    div:last-child input {
        width: 100%;
    } 
`

const LoginFormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
`

const LoginFormWrapper = styled.div`
    max-width: 100%;
`  

const LoginMessageWrapper = styled.div`
    color: #fff;
`

const ButtonsGrid = styled.div`
    justify-content: space-between;
    max-width: 80%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 5px;

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