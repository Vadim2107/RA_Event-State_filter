export default function ProjectList(props) {
    const { projects } = props;

    return (
        <div className="portfolio">        
            {projects.map((project, i) => {
                return (                
                    <div className="project" key={`project-${project.category}-${i}`}>
                        <img src={project.img} alt={`project-${project.category}-${i}`} />
                    </div>
                );
            })}
        </div>
    );
}
