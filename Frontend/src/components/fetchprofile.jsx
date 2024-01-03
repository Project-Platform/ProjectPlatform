//edit
import React, { useState, useEffect } from 'react';

const MyProfile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://your-backend-api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN}`, // Replace with the real token
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();
        setUserDetails(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      {userDetails ? (
        <div>
          <h2>{userDetails.name}</h2>
          <p>{userDetails.college}</p>
          <p>{userDetails.githubUsername}</p>
          <p>{userDetails.linkedinUsername}</p>
          <p>{userDetails.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyProfile;
