import React from 'react';
import styled from '@emotion/styled';
import Corner from './Corner';
import Property from './Property';
import Center from './Center';

const BoardContainer = styled.div`
  width: ${({ theme }) => theme.sizes.board};
  height: ${({ theme }) => theme.sizes.board};
  background-color: ${({ theme }) => theme.colors.center};
  display: grid;
  grid-template-columns: repeat(4, ${({ theme }) => theme.sizes.tile});
  grid-template-rows: repeat(4, ${({ theme }) => theme.sizes.tile});
  gap: 2px;
  border: 4px solid #000;
`;

const GameBoard = () => {
  return (
    <BoardContainer>
      <Corner className="go">My Travel Adventures</Corner>
      <Property>Photos</Property>
      <Property>Blog Posts</Property>
      <Property>Articles</Property>
      <Corner className="visit">Visit My Quest List</Corner>
      <Property vertical>Contact</Property>
      <Center />
      <Property vertical>About</Property>
      <Corner className="adventure">Let's Go On An Adventure</Corner>
      <Property>Destination 1</Property>
      <Property>Destination 2</Property>
      <Property>Destination 3</Property>
      <Corner className="treasure">Hidden Treasures</Corner>
    </BoardContainer>
  );
};

export default GameBoard;