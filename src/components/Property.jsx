import React from 'react';
import styled from '@emotion/styled';   

const PropertTile = styled.div` 

display: flex;
justify-content: center;
text-align: center;
align-items: center;
padding: 10px;
font-weight: bold;
color: ${({ theme }) => theme.colors.property};
background-color: ${({ theme }) => theme.colors.property};
transform: ${({ vertical }) => vertical ? 'rotate(-90deg)' : 'none'};
`;


const Propertt = ({ vertical, children }) => {
    return <PropertTile vertical={vertical}>{children}</PropertTile>;
};

export default Property;