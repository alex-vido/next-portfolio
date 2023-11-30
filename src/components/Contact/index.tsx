import { At, GithubLogo, LinkedinLogo, Phone } from "@phosphor-icons/react";

import { ContactIfoContainer, Container, Heading } from "./styles";


export default function Contact() {
  return (
    <Container id="contact">
      <Heading>
        CONTACT
        <span>
          Get in Touch
          <hr />
        </span>
      </Heading>
      <ContactIfoContainer>
        <section>
          <h4>
            ADDRESS
          </h4>
          <span>Jaraguá, São Paulo - SP</span>
        </section>

        <section>
          <span><Phone size={32} weight="fill" />(11) 99003-0975</span>
          <span><At size={32} weight="bold" />alex.vido93@gmail.com</span>
        </section>

        <section>
          <h4>
            FOLLOW ME
          </h4>
          <section>
            <a
              href="https://www.linkedin.com/in/alexvido/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={32} weight="fill" />
            </a>
            <a
              href="https://github.com/alex-vido"
              target="_blank"
              rel="noopener noreferrer">
              <GithubLogo size={32} weight="fill" />
            </a>
          </section>
        </section>
      </ContactIfoContainer>

    </Container>
  )
}