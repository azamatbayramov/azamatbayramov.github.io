import React from 'react';
import Profile from '../components/Profile/Profile';
import AboutMe from '../components/AboutMe/AboutMe';
import Skills from '../components/Skills/Skills';
import Education from '../components/Education/Education';
import Contacts from '../components/Contacts/Contacts';


/*
const MainPageContainer = styled.div`
  margin: 0;
  padding: 0;
`

const MainPageMain = styled.main`
  background-color: var(--color4);

  display: flex;
  flex-direction: column;

  gap: 2.5em;

  padding: 2em 10%;
`
*/

const Page = () => {
    return (
      <div>
        <main>
          <Profile />
          <AboutMe />
          <Skills />
          <Education />
          <Contacts />
        </main>
      </div>
    );
};


export default Page;
