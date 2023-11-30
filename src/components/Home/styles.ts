"use client"
import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  background-color: #111418 ;
  background-image: url('/images/mainBg.png');
  background-repeat: no-repeat; 
  background-size: cover; 
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: 100vh;
  justify-content: center;
  width: 100%;

  span {
    color: white; 
    font-size: 6.4rem;
    font-weight: 600;
  }

  p {
    color: #DEE3E4;
    font-size: 2rem;
  }

  button {
    background: transparent;
    border:  #20C997 solid 0.2rem;
    border-radius: 2.4rem ;
    cursor: pointer;
    padding: 1.6rem 3.6rem;

    a {
      color: #20C997 ;
      font-size: 1.6rem;
      font-weight: 700;    
    }

    &:hover {
        background-color: rgba(17,20,24,0.8) ;
        transition: background-color 350ms ease-in-out;
      }
  }
`