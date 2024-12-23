// Components
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ProjectCard from "../../components/projectCard";

// Project Card Data
import { projects } from "../../data/projects";

export default function Work() {
    return (
        <>
        <Navbar />
        {projects.map((project) => (
                    <ProjectCard
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        image={project.image}
                        link={project.link}
                    />
                ))}
        <Footer />
    </>
  );
}
