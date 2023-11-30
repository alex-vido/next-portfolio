"use client"
import styled from "styled-components";

export const Container = styled.aside`
  background: #111418;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 4rem;
`

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  span {
    color: #FFFFFF;
    font-size: 2rem;
    font-weight: 500;
  }
`

export const ProfileImg = styled.div`
  background-image: url('/images/profile.png');
  background-repeat: no-repeat; 
  background-size: cover; 
  border-radius: 100%;
  border: 0.8rem solid rgba(52, 58, 64, 1);
  height: 17.6rem;
  margin-bottom: 2rem;
  width: 17.6rem;
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  
  a {
    color: #FAFAFA;
    font-size: 1.6rem;

    &:hover {
      color: #20C997;
      transition: color 350ms ease-in-out;
    }
  }

`


export const Footer = styled.footer`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
`

export const SocialLink = styled.a`
  svg {
      fill: #AAB1B8;

      &:hover {
        fill: #4d555a;
        transition: fill 350ms ease-in-out;

      }
    }
`