import React from 'react';
import styled from 'styled-components';
import { Section } from '../Common/Section';


const ContactsBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 2em;
`

const ContactIcon = styled.img`
  width: 3em;
  transition: transform 0.5s;
  margin: 0;

  &:hover {
    transform: scale(1.2);
  }
`


const Contacts: React.FC = () => {
  return (
    <Section id="contacts">
      <h2>Contacts</h2>
      <ContactsBlock>
        <a href="https://t.me/azamatbayramov" id="tg-link">
          <ContactIcon src="img/telegram.svg" alt="Telegram Logo" />
        </a>
        <a href="https://github.com/azamatbayramov" id="gh-link">
          <ContactIcon src="img/github.svg" alt="GitHub Logo" />
        </a>
        <a href="mailto:bayramov.azamat04@gmail.com" id="email">
          <ContactIcon src="img/email.svg" alt="Email Logo" />
        </a>
      </ContactsBlock>
    </Section>
  );
};

export default Contacts;
