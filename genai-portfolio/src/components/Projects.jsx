
import React from 'react';
import projects from '../projects';

const Projects = () => {
  return (
    <div>
      <h2>🚀 Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.tech.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
