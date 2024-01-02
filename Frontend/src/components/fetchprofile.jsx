//edit
import React, { useState, useEffect } from 'react';

const MyProfile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Fetch user profile details when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('https://your-backend-api/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${YOUR_JWT_TOKEN}`, // Replace with the actual token
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
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {userDetails ? (
        <div>
          <h2>{userDetails.name}</h2>
          <p>{userDetails.college}</p>
          <p>{userDetails.githubUsername}</p>
          <p>LinkedIn: {userDetails.linkedinUsername}</p>
          <p>Email: {userDetails.email}</p>
          {/* Add other profile details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyProfile;
