"use client"
import styled from "styled-components";



export const Container = styled.section`
  align-items: flex-start;
  background: #212529;
  display: flex;
  flex-direction: column;
  gap: 16rem;
  height: 100vh;
  padding: 4rem 25.4rem;
  width: 100%;
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
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 3.6rem;
    font-weight: 600;
    position: absolute;
    white-space: nowrap;
    
    hr {
      animation: bgChange 4s infinite alternate;
      background-color: #20C997;
      border: transparent;
      height: 0.8rem;
      width: 8rem;


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
export const ContactIfoContainer = styled.section`
  color: #FFFFFF;
  display: flex;
  gap: 4rem;
  margin: 0 auto;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    h4 {
      font-size: 2.4rem;
      font-weight:500;
      line-height: 2.4rem;
    }

    span {
      align-items: center;
      display: flex;
      font-size: 1.6rem;
      gap: 0.8rem;

      svg {
        fill: #20C997;
      }
    }

    section {
      display: flex;
      flex-direction: row;

      svg {
      fill: #AAB1B8;

      &:hover {
        fill: #4d555a;
        transition: fill 350ms ease-in-out;

      }
    }
    }
  }
`
