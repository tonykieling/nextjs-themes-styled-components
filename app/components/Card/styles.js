import styled from 'styled-components';

export const Container = styled.div`
  background-color: lightgray;
  border: 1px solid green;
  border-radius: 15px;
  padding: 2rem;
  margin: 3rem;
`;

export const Card = styled.div`
  border: 1px solid darkgray;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Name = styled.h1`
  color: darkred;
  &:hover {
    font-style: italic;
  }
`;

export const Description = styled.p`
  color: marron;
`;
