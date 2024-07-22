import React from 'react';

const Project = ({ id, name, url, skills, description }) => {
    return (
        <div data-aos="fade-up" className="col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}>
                <h2>{name}</h2>
            </a>
            {description && <p className="project-description">{description}</p>}
            {skills && (
                <div className="project-skills">
                    {skills.map((skill, index) => (
                        <span key={index} className="skill-badge">{skill}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Project;
