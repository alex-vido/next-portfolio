"use client"
import About from '@/components/About';
import Home from '@/components/Home';
import { MainContainer } from "./styles";
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

export default function Main() {
  return (
    <MainContainer>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </MainContainer>
  )
}
