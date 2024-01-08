import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { createStudent, getStudentByUsername, updateStudent } from '../services/studentData';
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  const [profileData, setProfileData] = useState({
    name: '',
    universityName: '',
    githubUsername: '',
    linkedinProfile: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    if (session) {
      fetchStudentData();
    }
  }, [session]);

  const fetchStudentData = async () => {
    try {
      const { name, universityName, githubUsername, linkedinProfile } = await getStudentByUsername();
      setProfileData({
        ...profileData,
        name: name,
        universityName: universityName,
        githubUsername: githubUsername,
        linkedinProfile: linkedinProfile,
      });
      setIsNewUser(false); 
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const handleSaveProfile = async () => {
    try {
      console.group(profileData);
      const createdStudent = await createStudent(profileData);
      console.log('Student created:', createdStudent);
      setProfileData({
        name: '',
        universityName: '',
        githubUsername: '',
        linkedinProfile: '',
      });
      setIsEditMode(false);
      setIsNewUser(false);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const handleEditProfile = () => {
    setIsEditMode(true);
  };

  const handleUpdateProfile = async () => {
    try {
      const updatedStudent = await updateStudent(profileData);
      console.log('Student updated:', updatedStudent);
      setIsEditMode(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Card color="transparent" shadow={false} className="mt-10 place-items-center">
      <Typography variant="h4" color="blue-gray">
        My Profile
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Your Profile Details!
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            id="name"
            placeholder="Your Name"
            autoComplete="name"
            onChange={(e) => handleInputChange('name', e.target.value)}
            value={profileData.name}
            disabled={!isEditMode}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your University Name
          </Typography>
          <Input
            size="lg"
            placeholder="Your University"
            id="university"
            autoComplete="organization"
            onChange={(e) => handleInputChange('universityName', e.target.value)}
            value={profileData.universityName}
            disabled={!isEditMode}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your GitHub Username
          </Typography>
          <Input
            size="lg"
            placeholder="GitHub"
            id="github"
            autoComplete="username"
            onChange={(e) => handleInputChange('githubUsername', e.target.value)}
            value={profileData.githubUsername}
            disabled={!isEditMode}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your LinkedIn Username
          </Typography>
          <Input
            size="lg"
            placeholder="LinkedIn"
            id="linkedin"
            autoComplete="username"
            onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
            value={profileData.linkedinProfile}
            disabled={!isEditMode}
          />
        </div>
        {isNewUser ? (
          <Button className="mt-6" fullWidth onClick={handleSaveProfile}>
            SAVE.
          </Button>
        ) : (
          <>
            <Button className="mt-6" fullWidth onClick={handleEditProfile}>
              EDIT.
            </Button>
            {isEditMode && (
              <Button className="mt-6" fullWidth onClick={handleUpdateProfile}>
                UPDATE.
              </Button>
            )}
          </>
        )}
      </form>
    </Card>
  );
}
