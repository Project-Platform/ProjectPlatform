import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../services/projectData';
import ProjectView from '../components/ProjectView';
import ProjectCard from '../components/ProjectCard';
import { Typography } from '@material-tailwind/react';

export default function ProjectViewPage() {
  const proId =useParams();
  const [projectData, setProjectData] = useState(null);
  const [similarProjects,setsimilarProjects]=useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        console
        const project = await getProjectById(proId.id);
        setProjectData(project.project);
        setsimilarProjects(project.similarProjects);
      } catch (error) {
        console.error('Error fetching project:', error);
        // Handle the error as needed, e.g., show an error message to the user
      }
    };

    fetchProjectData();
  }, [proId.id]);

  if (!projectData) {
    // Render a loading state or return null if data is not available yet
    return null;
  }

  return (
    <>
      <ProjectView
        title={projectData.title}
        abstract={projectData.abstract}
        author={projectData.author}
        date={projectData.date}
        field={projectData.field}
        domain={projectData.domain}
        githubLink={projectData.githubLink}
        youtubeLink={projectData.youtubeLink}
        docs={projectData.docs}
      />
      <Typography variant="h4" color="black" className="flex justify-center mt-6 underline">
        Projects you might find relevant
      </Typography>
      <div className="flex flex-row flex-wrap place-content-center">
        {similarProjects.map((curr) => (
          <ProjectCard
            className="mx-1 w-9/12 sm:w-6/12 lg:w-4/12"
            key={curr._id}
            domain={curr.domain}
            name={curr.title}
            descp={curr.abstract}
            id={curr._id}
          />

        ))}
      </div>
    </>
  );
}
