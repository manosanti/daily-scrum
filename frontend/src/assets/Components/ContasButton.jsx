import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContasButton = ({ imageURL, imageALT }) => {
    const ContasButton = styled.div`
      position: fixed;
      right: 4%;
      bottom: 6%;
      border-radius: 100%;
    
      img {
        width: 64px;
        height: 64px;
        border-radius: 100%;
        background-color: white;
      } 
    `
  
    return (
    <ContasButton>
        <Link to="/Contas">
            <img src={imageURL} alt={imageALT}/>
        </Link>
    </ContasButton>
    )
}

export default ContasButton;