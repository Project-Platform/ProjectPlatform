import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../services/projectData';
import ProjectView from '../components/ProjectView';
import ProjectCard from '../components/ProjectCard';
import { Typography, Spinner } from '@material-tailwind/react';

export default function ProjectViewPage() {
  const proId = useParams();
  const [projectData, setProjectData] = useState(null);
  const [similarProjects, setSimilarProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const project = await getProjectById(proId.id);
        setProjectData(project.project);
        setSimilarProjects(project.similarProjects);
      } catch (error) {
        console.error('Error fetching project:', error);
        // Handle the error as needed, e.g., show an error message to the user
      } finally {
        // Set loading to false once the data is fetched (whether successful or not)
        setIsLoading(false);
      }
    };

    fetchProjectData();
  }, [proId.id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className='h-12 w-12'/>
      </div>
    );
  }

  if (!projectData) {
    // Render a message or return null if data is not available yet
    return (
      <div>
        <p>Data not available</p>
      </div>
    );
  }

  return (
    <div className="mt-10">
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
       <hr />
      <Typography variant="h4" color="black" className="mb-4 flex justify-center mt-6 underline">
        Projects you might find relevant
      </Typography>
      <div className="flex flex-row flex-wrap place-content-center gap-4">
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
    </div>
  );
}
