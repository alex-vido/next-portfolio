"use client"
import styled, { keyframes } from "styled-components";


export const Container = styled.section`
  background: #343A40;
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 25.4rem;
  width: 100%;
  gap: 4rem;
`

export const Heading = styled.h2`
  align-items: center;
  color: #6C757D;
  display: flex;
  font-size: 13.2rem;
  justify-content: center;
  margin: 0 auto;
  position: relative;

  span {
    color: #fff;
    font-size: 3.6rem;
    font-weight: 600;
    position: absolute;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    hr {
      animation: bgChange 4s infinite alternate;
      width: 8rem;
      height: 0.8rem;
      background-color: #20C997;
      border: transparent;


      @keyframes bgChange {
        0% {
          background-color: #6100FF;
          }

        50% {
          background-color: #20C997;
        }

        100% {
          background-color: #EBFF00;
        }
      }
    }
  }
`

export const FiltersContainer = styled.section`
  display: flex;
  gap: 0.8rem;
  margin: 0 auto;

  button {
    font-size: 1.6rem;
    color: #ddd;
    border: none;
    background-color: transparent;
    padding: 0.4rem;
    border-bottom: transparent 2px solid;

    &:hover {
      color: #20C997;
      border-bottom: #20C997 2px solid;
      transition: all 350ms ease-in-out;
    }
  }
`

export const GridContaier = styled.section`
  display: grid;
  grid-template-areas:
      'A B C'
      'A B C'
      'D B E'
      'D B E'
      'D F E'
      'D F G'
      'D F G';
  grid-column-gap: 2.4rem;
  grid-row-gap: 2.4rem;
  margin: 0 auto;
  width: 100%;
  transition: opacity 0.3s ease-in-out;

  section {
    padding: 8.8rem 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    color: #343A40;
    transition:  all 300ms ease-in-out;

    &:nth-child(1) {
      grid-area: A;
      background-color: #37F0A2;
    }

    &:nth-child(2) {
      background-color: #00FFD1;
      grid-area: B;
    }

    &:nth-child(3) {
      background-color: #0A06E7;
      color: #fff;
      grid-area: C;
    }

    &:nth-child(4) {
      grid-area: D;
      background-color: #7106DB;
      color: #fff;
    }

    &:nth-child(5) {
      grid-area: E;
      background-color: #FF7A00;
      color: #fff;
    }
    
    &:nth-child(6) {
      grid-area: F;
      background-color: #FFE500;
    }

    &:nth-child(7) {
      grid-area: G;
      background-color: #CCFF00;
    }

    &:hover {
      transform: scale(1.1);
      transition:  all 300ms ease-in-out;
      cursor: pointer;
    }

    h3 {
      font-size: 4rem;
      font-weight: 700;
      text-align: center;
    }
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const ModalContainer = styled.section<{ show: boolean }>`
  background-color: #212529;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${({ show }) => (show ? '1' : '0')};
  transition: opacity 0.3s ease-in-out;
  animation: ${({ show }) => (show ? fadeIn : fadeOut)} 0.3s ease-in-out forwards;
`

export const Modal = styled.section`  
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #343A40;
  width: 80%;
  gap: 2.4rem;
  border-radius: 0.8rem;
  position: relative;
  padding: 3.2rem 1.6rem;

  button {
    background: transparent;
    border: 0;
    color: #dee3e4;
    cursor: pointer;
    position:  absolute;
    right: 0.8rem;
    top: 0.8rem;
    transition: all 350ms ease-in-out;


    &:hover {
    color: #37F0A2;
    transition: all 350ms ease-in-out;
    }
  }

`
export const HeaderModal = styled.header`
  display: flex;
  justify-content: center;


  h2 {
    font-size: 2.4rem;
    color: #fff;
    font-weight: 400;
  }

`

export const MainModal = styled.section`
  display: flex;
  gap: 2.4rem;
`
export const ProjectImage = styled.img`
width: 59.7rem;
height: 39.7rem;
padding-left: 0.8rem;
`
export const ProjectInfo = styled.section`
display: flex;
flex-direction: column;
gap: 1.6rem;
`

export const ProjectDetails = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  color: #fff;
  width: 80%;

  h4 {
  font-size: 1.8rem;
  font-weight: 500;
  }

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: #dee3e4;
  }

  span,a {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid  rgb(255,255,255,0.2);


    strong {
    font-size: 1.6rem;

    }
  }
    a {
        cursor: pointer;
        color: inherit;
      }

`

