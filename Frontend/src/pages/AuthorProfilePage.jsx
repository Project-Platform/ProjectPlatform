import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getStudentByUsername } from '../services/studentData';
import AuthorProfile from '../components/AuthorProfile';

function AuthorProfilePage() {
  const { username } = useParams();
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const data = await getStudentByUsername(username);
        setAuthorData(data);
      } catch (error) {
        console.error('Error fetching author data:', error);
      }
    };

    fetchAuthorData();
  }, [username]);

  return (
    <div>
      {authorData && (
        <AuthorProfile
          username={authorData.username}
          name={authorData.name}
          university={authorData.universityName}
          githubUsername={authorData.githubUsername}
          linkedInUsername={authorData.linkedinProfile}
          email={authorData.email}
        />
      )}
    </div>
  );
}

export default AuthorProfilePage;
