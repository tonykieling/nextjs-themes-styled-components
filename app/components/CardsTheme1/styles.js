import styled from 'styled-components';

// the properties commented out means they are going to be defined in ThemeConfig.js
// all other CSS properties keep being defined in here
export const Container = styled.div`
  // background-color: lightgray; // this is going to be set by theme- DON'T need it here
  border: 1px solid green;
  border-radius: 15px;
  padding: 2rem;
  margin: 1rem 0;
  margin-top: 2rem;
  width: 50%;
`;
  
export const Card = styled.div`
  border: 1px solid darkgray;
  border-radius: 8px;
  padding: 1rem;
`;

export const Name = styled.h1`
  // color: darkred; // this is defined by theme - DON'T need it here
  &:hover {
    font-style: italic;
  }
`;

export const Description = styled.p`
  // color: darkgreen; // this is defined by theme - DON'T need it here
`;
