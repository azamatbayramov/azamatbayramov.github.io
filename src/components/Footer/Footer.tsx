import React from 'react';
import styled from 'styled-components';


const FooterContainer = styled.footer`
  background-color: var(--color2);
  color: var(--color4);
  
  text-align: center;
  padding: 1em 0;
`

const FooterText = styled.p`
  margin: 0;
`


const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Azamat Bayramov</FooterText>
    </FooterContainer>
  );
};

export default Footer;
