import React from 'react';
import { Container } from '../Container';
import { Header } from '../TopSection/Header';
import { TopSection } from '../TopSection';

export const StaticPage = ({ children }) => (
  <TopSection>
    <Container>
      <Header />
      {children}
    </Container>
  </TopSection>
);
