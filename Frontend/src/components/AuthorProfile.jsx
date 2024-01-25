// AuthorProfile.jsx (Component)

import React from 'react';

function AuthorProfile({ username, name, university, githubUsername, linkedInUsername }) {
  return (
    <div>
      <h2>Author Profile</h2>
      <p>Username: {username}</p>
      <p>Name: {name}</p>
      <p>University: {university}</p>
      <p>GitHub Username: {githubUsername}</p>
      <p>LinkedIn Username: {linkedInUsername}</p>
    </div>
  );
}

export default AuthorProfile;
