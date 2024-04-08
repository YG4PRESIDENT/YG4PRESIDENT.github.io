import React from 'react';
import styled from '@emotion/styled';


const CenterContainer = styled.div`
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    background-color: ${({ theme }) => theme.colors.center};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #000;
    font-weight: bold;
    `;


const CenterContent = styled.div`
    text-align: center;
    `;


const Center = () => {
    return (
        <CenterContainer>
            <CenterContent>
            <h2>YG4PRESIDENT</h2>    
            <p> Welcome to a glimpse into my life </p>
            </CenterContent>
        </CenterContainer>
    );
};

export default Center;