export type Project = {
  id: string;
  title: string;
  technologies: string[];
  stack: string;
  image?: string;
  description: string;
  repository: string;
  deploy?: string;
};
