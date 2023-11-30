import { AboutMe, BasicInfo, Container, Heading, ShortDescription } from "./styles";


export default function About() {
  return (
    <Container id="about">
      <Heading>
        ABOUT ME
        <span>
          Know Me More
          <hr />
        </span>
      </Heading>
      <AboutMe>
        <ShortDescription>
          <h3>
            I&apos;m <strong>Alex Vido</strong>, a Full-Stack Developer
          </h3>
          <span>
          As a passionate full-stack developer, I bring a blend of theoretical knowledge and hands-on experience gained through challenging personal projects. My journey into the world of coding has been characterized by a commitment to building comprehensive and intricate applications.
          </span>
        </ShortDescription>
        <BasicInfo>
          <span><strong>Name:</strong> Alex Vido</span>
          <span><strong>Email:</strong> alex.vido93@gmail.com</span>
          <span><strong>Age:</strong> 30</span>
          <span><strong>From:</strong> São Paulo - SP, Brazil</span>
        </BasicInfo>
      </AboutMe>

    </Container>
  )
}