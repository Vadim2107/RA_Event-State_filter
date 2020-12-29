export default function ProjectList(props) {
    const { projects } = props;
    const renderProjects = (projects) => {
        return projects.map((project, i) => {
            return (                
                <div className="project" key={`project-${project.category}-${i}`}>
                    <img src={project.img} alt={`project-${project.category}-${i}`} />
                </div>
            );
        });
    };

    return (
        <div className="portfolio">        
            {renderProjects(projects)}
        </div>
    );
}
