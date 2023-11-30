import { data } from "@/data/data";
import { X } from "@phosphor-icons/react";
import { HeaderModal, MainModal, Modal, ModalContainer, ProjectDetails, ProjectImage, ProjectInfo } from "./styles";
import { Project } from "./types";

type ProjectModalParams = {
  id: string,
  handleModal: () => void
}

export default function ProjectModal({ id, handleModal }: ProjectModalParams) {

  const project = data.find((projectData: Project) => projectData.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ModalContainer show={Boolean(project)}>
      <Modal>
        <HeaderModal>
          <h2>{project.title}</h2>
        </HeaderModal>
        <MainModal>
          {project.image &&
            <ProjectImage src={project.image} />
          }
          <ProjectInfo>
            <ProjectDetails>
              <h4>Project Description:</h4>
              <p>{project.description}</p>
            </ProjectDetails>
            <ProjectDetails>
              <h4>Project Details:</h4>
              <span><strong>Technologies:</strong> {project.technologies.map((tech) => `${tech} | `)}</span>
              <span><strong>Stack:</strong> {project.stack}</span>
              { project.deploy &&
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"><strong>Deploy:</strong> {project.deploy}</a>
              }
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"><strong>Repository:</strong> {project.repository}</a>
            </ProjectDetails>
          </ProjectInfo>
        </MainModal>
        <button ><X size={32} weight="bold" onClick={handleModal} /></button>
      </Modal>
    </ModalContainer>
  )

}