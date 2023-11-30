"use client"
import { data } from "@/data/data";
import { useEffect, useState } from "react";
import ProjectModal from "./ProjectModal";
import { Container, FiltersContainer, GridContaier, Heading } from "./styles";
import { Project } from "./types";

type Stack = 'all' | 'Back-end' | 'Front-end' | 'Full-stack'

export default function Portfolio() {
  const [openModal, setModalOpen] = useState(false)
  const [projectId, setProjectId] = useState<string>('')
  const [getStack, setStack] = useState<Stack>('all')
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const handleProjectId = (event: React.MouseEvent<HTMLElement>) => {
    const { id } = event.currentTarget
    setProjectId(id)
    setModalOpen(true)
  }


  useEffect(() => {
    const filterProjects = () => {
      if (getStack === 'all') {
        setFilteredProjects(data);
        return
      }
      const filtered = data.filter((project) => project.stack === getStack);
      setFilteredProjects(filtered);
    };

    filterProjects();
  }, [getStack]);

  const handleFilterClick = (stack: Stack) => {
    setStack(stack);
  };

  return (
    <Container id="portfolio">
      <Heading>
        PORTFOLIO
        <span>
          My Work
          <hr />
        </span>
      </Heading>
      <FiltersContainer>
        <button
          type="button"
          onClick={() => handleFilterClick('all')}
          style={{ color: getStack === 'all' ? '#20C997' : '#ddd' }}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => handleFilterClick('Front-end')}
          style={{ color: getStack === 'Front-end' ? '#20C997' : '#ddd' }}
        >
          Front-end
        </button>
        <button
          type="button"
          onClick={() => handleFilterClick('Back-end')}
          style={{ color: getStack === 'Back-end' ? '#20C997' : '#ddd' }}
        >
          Back-end
        </button>
        {/* 
        <button
          type="button"
          onClick={() => handleFilterClick('Full-stack')}
          style={{ color: getStack === 'Full-stack' ? '#20C997' : '#ddd' }}
        >
          Full-stack
        </button>
         */}
      </FiltersContainer>
      <GridContaier >
        {filteredProjects.map((project: Project) => (
          <section key={project.id} id={project.id} onClick={handleProjectId}>
            <h3>{project.title}</h3>
          </section>
        ))}
      </GridContaier>

      {openModal && <ProjectModal id={projectId} handleModal={() => setModalOpen(false)} />}

    </Container>
  )
}