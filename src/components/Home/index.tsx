import Typewriter from 'typewriter-effect';
import { Container } from "./styles";
import Link from 'next/link';

const phrases = [" I'm Alex Vido", "I'm a Front-end Developer!", "I'm a Back-end Developer!", "I'm a Full-Stack Developer!"]

export default function Home() {
  return <Container id="home">
    <span>Welcome</span>
    <Typewriter
      options={{
        strings: phrases,
        autoStart: true,
        loop: true,
      }}
    />
    <p>
      based in São Paulo, Brazil.
    </p>
    <button type='button'>
      <Link href="#contact">
        Hire me
      </Link>
    </button>
  </Container>
}