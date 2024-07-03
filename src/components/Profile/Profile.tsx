import React from 'react';
import styled from 'styled-components';


const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const ProfileImage = styled.img`
  width: 15em;
  border-radius: 50%;
  margin: 0;
`

const ProfileTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
`

const ProfileTitleText = styled.h1`
  margin: 0;
`



const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileImage src="img/my_photo.jpg" alt="My Photo" />
      <ProfileTitle>
        <ProfileTitleText>Azamat Bayramov</ProfileTitleText>
        <p>Python Backend Developer</p>
      </ProfileTitle>
    </ProfileContainer>
  );
};

export default Profile;
