import React, { useState,useEffect } from 'react';  
import { Card, Input, Button, Typography } from "@material-tailwind/react";
//
import { createStudent, getStudentByUsername, updateStudent} from '../services/studentData';
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();
  const [profileData, setProfileData] = useState({
    name: '',
    universityName: '',
    github: '',
    linkedin: '',
  })
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
        if (session) {
      fetchStudentData();
      console.log(session);
    }
  }, [session]);

  const fetchStudentData = async () => {
    try {
      const { name, universityName } = await getStudentByUsername();
      setProfileData({
        ...profileData,
        name: name,
        universityName: universityName,
      });
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };
  
  useEffect(() => {
    console.log(profileData);
  }, [profileData]);

  const handleSaveProfile = async () => {
    try {
      console.group(profileData);
      const createdStudent = await createStudent(profileData);
      console.log('Student created:', createdStudent);
      setProfileData({
        name: '',
        universityName: '',
        github: '',
        linkedin: '',
      });

    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };
  const handleEditProfile = async () => {
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
          <label htmlFor="name" className="before:content-none after:content-none"></label>
          <Input
            size="lg"
            id="name"
            placeholder="Your Name"
            autoComplete="name"
            onChange={(e) => handleInputChange('name', e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your University Name
          </Typography>
          <label htmlFor="name" className="before:content-none after:content-none"></label>
          <Input
            size="lg"
            placeholder="Your University"
            id="university"
            autoComplete="organization"
            onChange={(e) => handleInputChange('universityName', e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your GitHub Username
          </Typography>
          <label htmlFor="name" className="before:content-none after:content-none"></label>
          <Input
            type="password"
            size="lg"
            placeholder="GitHub"
            id="github"  
            autoComplete="username"
            onChange={(e) => handleInputChange('github', e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your LinkedIn Username
          </Typography>
          <label htmlFor="name" className="before:content-none after:content-none"></label>
          <Input
            type="password"
            size="lg"
            placeholder="LinkedIn"
            id="linkedin"
            autoComplete="username"
            onChange={(e) => handleInputChange('linkedin', e.target.value)}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button className="mt-6" fullWidth onClick={handleSaveProfile}>
          SAVE.
        </Button>
        <Button className="mt-6" fullWidth onClick={handleEditProfile}>
          {/* doubt */}
          EDIT.
          </Button>
      </form>
    </Card>
  );
}

 