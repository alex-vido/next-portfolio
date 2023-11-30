"use client"
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { Container, Footer, Header, Nav, ProfileImg, SocialLink } from "./styles";

type Page = 'home' | 'about' | 'portfolio' | 'contact'

export default function SideBar() {
  const [getPage, setPage] = useState<Page>('home')

  const handlePageClick = (page: Page) => {
    setPage(page);
  };

  return (
    <Container>
      <Header>
        <ProfileImg />
        <span>
          Alex Vido
        </span>
      </Header>
      <Nav>
        <Link
          onClick={() => handlePageClick('home')}
          style={{ color: getPage === 'home' ? '#20C997' : '#ddd' }}
          href="#home"
        >
          Home
        </Link>
        <Link
          onClick={() => handlePageClick('about')}
          style={{ color: getPage === 'about' ? '#20C997' : '#ddd' }}
          href="#about"
        >
          About Me
        </Link>
        <Link
          onClick={() => handlePageClick('portfolio')}
          style={{ color: getPage === 'portfolio' ? '#20C997' : '#ddd' }}
          href="#portfolio"
        >
          Portfolio
        </Link>
        <Link
          onClick={() => handlePageClick('contact')}
          style={{ color: getPage === 'contact' ? '#20C997' : '#ddd' }}
          href="#contact"
        >
          Contact
        </Link>
      </Nav>
      <Footer>
        <SocialLink
          href="https://www.linkedin.com/in/alexvido/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo size={32} weight="fill" />
        </SocialLink>
        <SocialLink
          href="https://github.com/alex-vido"
          target="_blank"
          rel="noopener noreferrer">
          <GithubLogo size={32} weight="fill" />
        </SocialLink>
      </Footer>
    </Container>
  )
}