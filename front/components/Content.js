import React from 'react';
import styled from 'styled-components';

import Breadcrumb from './Breadcrumb';
import Footer from './Footer';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84%;

  padding: 16px 24px 32px;
  background-color: ${prop => prop.theme.lightGrey};

  & > span:first-child {
    align-self: flex-start;
    margin-bottom: 16px;
  }

  & > div {
    background-color: white;
    height: 100%;
    height: 800px;
    width: 100%;
  }

  & > span:last-child {
    margin-top: 24px;
  }
`;
const Content = ({ content }) => {
  return (
    <Section>
      <Breadcrumb />
      <div>{content}</div>
      <Footer />
    </Section>
  );
};

export default Content;
