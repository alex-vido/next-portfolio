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
      width: 8.8rem;
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

export const AboutMe = styled.section`
align-items:flex-start;
display: flex;
gap: 4rem;
`

export const ShortDescription = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  h3 {
    color: #ffffff;
    font-size: 2.4rem;
    font-weight: 600;


    strong {
      color: #20C997;
      font-size: 2.4rem;
      font-weight: 600;
    }
}
  span {
    color: rgb(255,255,255,0.5);
    font-size: 1.6rem;
    font-weight: 400;
}
`

export const BasicInfo = styled.section`
display: flex;
flex-direction: column;

  span {
    border-bottom: 1px solid  rgb(255,255,255,0.2);
    color: #DEE3E4;
    display: flex;
    font-size: 1.6rem;
    gap: 1.6rem;
    padding-bottom: 1.2rem;
    
    strong {
      color: #DEE3E4;
      font-size: inherit;
      font-weight: 600;
  }
    &:not(:first-child) {
      padding-top: 1.2rem;
    }

    &:nth-child(2) {
      color: #20C997;
      }

}
`