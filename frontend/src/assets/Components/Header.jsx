import React from 'react'
import styled from 'styled-components'

export function Header() {

  const username = "Lucas";

  return (
    <HeaderContainer>
      <UserProfile>
        <h2>Olá, {username}</h2>
      </UserProfile>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  background-color: var(--gray);
  padding: 20px;
`

const UserProfile = styled.div`
  text-align: right;
  color: #fff;
`